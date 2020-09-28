import { environment } from './../../environments/environment';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project: any;
  el: any;

  constructor(private activatedRoute:ActivatedRoute) {}
 
  ngOnInit() {
    
    this.activatedRoute.data.subscribe(data => {
      this.project = data.project;
    })
  }

  initialiseModel() {
    if (!document.getElementById("model-container")) {
      if (this.project.model !== false) {
        this.el = document.createElement("div");
        this.el.id = "model-container";
  
        let closeButton = document.createElement("img");
        closeButton.id = "model-close-button";
        closeButton.src = "https://img.icons8.com/metro/52/000000/close-window.png";
  
        closeButton.addEventListener('click', () => {
          renderer.dispose()
          this.el.parentNode.removeChild(this.el);
        })
  
        document.getElementById("main").appendChild(this.el);
        this.el.appendChild(closeButton);
  
  
        let renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize( this.el.getBoundingClientRect().width - 20, this.el.getBoundingClientRect().height - 80 );
        this.el.appendChild( renderer.domElement );
        
        let scene = new THREE.Scene();
        

        // scene.fog = new THREE.Fog(new THREE.Color(0xffffff), 0, 20)
        scene.background = new THREE.Color(0xDCDCDC)
  
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(
          this.project.model.cameraPosition.x,
          this.project.model.cameraPosition.y,
          this.project.model.cameraPosition.z
        );
  
        scene.add(camera)
  
        var loader = new GLTFLoader();
        
  
        loader.load(this.project.model.path, function ( gltf ) {
          
          scene.add( gltf.scene );
  
        }, undefined, function ( error ) {
  
          console.error( error );
          return null;
  
        });
  
        var controls = new OrbitControls( camera, renderer.domElement );
        controls.target = new THREE.Vector3(0, 0, 0);
        controls.enableDamping = true;
  
  
        var pointLight = new THREE.PointLight( 0xffffff, this.project.lightIntensity, 100 );
        pointLight.position.set( 10, 10, 10 );
        scene.add( pointLight );
        var pointLight = new THREE.PointLight( 0xffffff, this.project.lightIntensity, 100 );
        pointLight.position.set( -10, 10, -10 );
        scene.add( pointLight );
        
        controls.update()
  
        var windowSize = this.el.getBoundingClientRect().width * this.el.getBoundingClientRect().height;
        
        const animate = () => {
          requestAnimationFrame( animate );
  
          if (this.el.getBoundingClientRect().width * this.el.getBoundingClientRect().height !== windowSize) {
            renderer.setSize( this.el.getBoundingClientRect().width - 20, this.el.getBoundingClientRect().height - 80 );
            
            camera.aspect = (this.el.getBoundingClientRect().width - 20) / (this.el.getBoundingClientRect().height - 80);
            camera.updateProjectionMatrix();
            controls.update()
          }
          
          renderer.render( scene, camera );
        }
        animate();
      }
    }
  }
}
