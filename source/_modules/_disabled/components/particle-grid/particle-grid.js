/* -------------------------------------------------- */
/* PARTICLE GRID
/* -------------------------------------------------- */

//removeIf(production)
console.log('particleGrid ' + ' 1.0 ' + ' Aries Datuin');
//endRemoveIf(production)


/* -------------------------------------------------- */
/* MAIN
/* -------------------------------------------------- */

// PARTICLE
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// PARTICLE
var Particle =
/*#__PURE__*/
function () {
  function Particle(context, x, y) {
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
    var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#fff';
    var movement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 25;
    var velocityDecay = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.5;
    var speed = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0.05;

    _classCallCheck(this, Particle);

    this.context = context;
    this.x = this.currentX = this.targetX = x;
    this.y = this.currentY = this.targetY = y;
    this.velocityX = this.velocityY = 0;
    this.d = d;
    this.speed = speed;
    this.velocityDecay = velocityDecay;
    this.color = color;
    this.movement = movement;
  }

  _createClass(Particle, [{
    key: "move",
    value: function move() {
      var r = this.d / 2;
      var distanceX = this.targetX - this.currentX,
          distanceY = this.targetY - this.currentY;
      this.velocityX *= this.velocityDecay;
      this.velocityY *= this.velocityDecay;
      this.velocityX += distanceX * this.speed;
      this.velocityY += distanceY * this.speed;
      this.currentX += this.velocityX;
      this.currentY += this.velocityY;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.move();
      var r = this.d / 2,
          context = this.context;
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.currentX, this.currentY, r, 0, Math.PI * 2, false);
      context.closePath();
      context.fill();
    }
  }, {
    key: "setTarget",
    value: function setTarget(x, y) {
      var r = this.d / 2,
          originX = this.x - r,
          originY = this.y - r;

      if (x !== undefined && y !== undefined) {
        // Yeah, science! http://math.stackexchange.com/questions/175896/finding-a-point-along-a-line-a-certain-distance-away-from-another-point
        var movement = this.movement,
            vectorX = x - originX,
            vectorY = y - originY,
            vector = Math.sqrt(Math.pow(vectorX, 2) + Math.pow(vectorY, 2)),
            distanceRatio = movement / vector; //if (distanceRatio < 1) {

        this.targetX = (1 - distanceRatio) * originX + distanceRatio * x;
        this.targetY = (1 - distanceRatio) * originY + distanceRatio * y; //} else {
        //	this.targetX = x;
        //	this.targetY = y;
        //}
      } else {
        this.targetX = originX;
        this.targetY = originY;
      }
    }
  }]);

  return Particle;
}(); // CANVAS


var Canvas =
/*#__PURE__*/
function () {
  function Canvas(element) {
    var _this = this;

    var particleSpacing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 125;
    var fps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000 / 100;

    _classCallCheck(this, Canvas);

    this.canvas = element;
    this.context = element.getContext('2d');
    this.particleSpacing = particleSpacing;
    this.fps = fps;
    window.addEventListener('resize', function () {
      return _this.init();
    });
    this.init();
    element.addEventListener('mousemove', function (event) {
      _this.particles.forEach(function (particle) {
        return particle.setTarget(event.clientX, event.clientY);
      });
    });
    element.addEventListener('mouseleave', function () {
      _this.particles.forEach(function (particle) {
        return particle.setTarget();
      });
    });
  }

  _createClass(Canvas, [{
    key: "init",
    value: function init() {
      this.stop();
      this.clear();
      this.resize();
      this.createParticles();
      this.animate();
    }
  }, {
    key: "resize",
    value: function resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "createParticles",
    value: function createParticles() {
      var cols = Math.floor(this.canvas.width / this.particleSpacing),
          rows = Math.floor(this.canvas.height / this.particleSpacing),
          colGutter = (this.particleSpacing + (this.canvas.width - cols * this.particleSpacing)) / 2,
          rowGutter = (this.particleSpacing + (this.canvas.height - rows * this.particleSpacing)) / 2;
      this.particles = [];

      for (var col = 0; col < cols; col++) {
        for (var row = 0; row < rows; row++) {
          var x = col * this.particleSpacing + colGutter,
              y = row * this.particleSpacing + rowGutter,
              particle = new Particle(this.context, x, y);
          this.particles.push(particle);
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.clear();

      if (this.particles) {
        for (var i = 0; i < this.particles.length; i++) {
          this.particles[i].draw();
        }
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      var now = Date.now();

      if (this.lastFrameDate === undefined || now - this.lastFrameDate > this.fps) {
        this.lastFrameDate = now;
        this.draw();
      }

      this.animationFrame = window.requestAnimationFrame(function () {
        return _this2.animate();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }]);

  return Canvas;
}();


/* -------------------------------------------------- */
/* INIT
/* -------------------------------------------------- */

//var cnvs = new Canvas(document.getElementById('nav-panel-particle-grid'));
