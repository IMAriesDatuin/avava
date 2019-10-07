/* -------------------------------------------------- */
/* COMPONENT
/* -------------------------------------------------- */

var planeWave = (function planeWave($, window, document, undefined) {

	'use strict';

	function init($element, vertexHeight, planeDefinition, planeSize, meshColor, background, alpha) {

		//removeIf(production)
		get.info('planeWave', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var container = document.getElementById($element);

		var vertexHeight = vertexHeight,
			planeDefinition = planeDefinition,
			planeSize = planeSize,
			totalObjects = 1,
			meshColor = meshColor,
			background = background,
			alpha = alpha;

		container.style.opacity = alpha;

		var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 400000);
		camera.position.z = 10000;
		camera.position.y = 10000;

		var scene = new THREE.Scene();
		scene.fog = new THREE.Fog(background, 1, 300000);

		var planeGeo = new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition);
		var plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({
			color: meshColor,
			wireframe: true
		}));
		plane.rotation.x -= Math.PI * 0.5;

		scene.add(plane);

		var renderer = new THREE.WebGLRenderer({alpha: false, antialias: true});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(background, 1);

		container.appendChild(renderer.domElement);

		updatePlane();

		function updatePlane() {

			for (var i = 0; i < planeGeo.vertices.length; i++) {

				planeGeo.vertices[i].z += Math.random() * vertexHeight - vertexHeight;
				planeGeo.vertices[i]._myZ = planeGeo.vertices[i].z;

			}

		}

		render();


		var count = 0;

		function render() {

			requestAnimationFrame(render);
			// camera.position.z -= 150;

			var x = camera.position.x,
				z = camera.position.z;

			camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10;
			camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10;
			camera.lookAt(new THREE.Vector3(0, 8000, 0));

			for (var i = 0; i < planeGeo.vertices.length; i++) {

				var z = +planeGeo.vertices[i].z;
				planeGeo.vertices[i].z = Math.sin(( i + count * 0.00002)) * (planeGeo.vertices[i]._myZ - (planeGeo.vertices[i]._myZ* 0.6));
				plane.geometry.verticesNeedUpdate = true;

				count += 0.1;

			}

			renderer.render(scene, camera);

		}

		window.addEventListener('resize', onWindowResize, false);

		function onWindowResize() {

			// Changes the size of the canavs and updates it.
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);

		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
