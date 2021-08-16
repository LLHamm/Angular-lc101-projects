import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  borderLeft: boolean = false;
  borderRight: boolean = false;
  borderTop: boolean = false;
  borderBottom: boolean = false;
  takeOffEnabled: boolean = true;
  color = 'green';
  height = 0;
  width = 0;
  fuelLevel = 10000;
  message = 'Space shuttle ready for takeoff!';
  

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
       this.fuelLevel -= 100;
    }
 }

  handleLanding(rocketImage) {
      window.alert('The shuttle is landing. Landing gear engaged.');
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'The shuttle has landed.';
      rocketImage.style.bottom = 0;
      rocketImage.style.left = 0;
      this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
       let result = window.confirm('Please confirm mission should be aborted.');
       if (result) {
        this.color = 'red';
        this.height = 0;
        this.width = 0;
        this.message = 'Mission Aborted.';
        rocketImage.style.bottom = '0px';
        this.takeOffEnabled = true;
       }
  }

    moveRocket(rocketImage, direction) {
      if (parseInt(rocketImage.style.left) > 160) {
        this.borderRight = true;
      } else if (parseInt(rocketImage.style.left) < -10) {
          this.borderLeft = true;
      } else if (parseInt(rocketImage.style.bottom) < 0) {
          this.borderBottom = true;
      } else if (parseInt(rocketImage.style.bottom) > 310) {
        this.borderTop =true;
      } else {
        this.borderTop = false;
        this.borderBottom = false;
        this.borderRight = false;
        this.borderLeft = false;
      }

      if (parseInt(rocketImage.style.left) < 0 || parseInt(rocketImage.style.left) > 150 || parseInt(rocketImage.style.bottom) < 0 || parseInt(rocketImage.style.bottom) > 300) {
        this.color = "red";
      } else {
        this.color = "blue";
      }

      if (direction === 'right') {
        let movement = parseInt(rocketImage.style.left) + 10 + 'px';
        rocketImage.style.left = movement;
        this.width = this.width + 10000;
      } else if (direction === 'left') {
        let movement = parseInt(rocketImage.style.left) -10 + 'px';
        rocketImage.style.left = movement;
        this.width = this.width - 10000;
      } else if (direction === 'down') {
        let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height = this.height - 10000;
      } else {
        let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height = this.height + 10000;
      }
      this.fuelLevel -= 100;
      if (this.fuelLevel < 1) {
        this.handleAbort(rocketImage);
      }
      this.checkPosition(this.height, this.width);
      
    }

    checkPosition(height, width) {
      if (width > 260000 || width < 0 || height > 330000 || height < 0) {
        this.color = 'orange';
      } else {
        this.color = 'blue';
      }
    }
  }