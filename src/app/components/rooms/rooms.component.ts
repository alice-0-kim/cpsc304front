import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { Room } from '../../services/room';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})

export class RoomsComponent implements OnInit {
  baseUrl = 'http://localhost:3000/api';
  rooms = [];
  toggle = false;
        
  constructor(private roomsService: RoomsService, private router: Router) {
  }

  ngOnInit(): void {
    this.rooms = JSON.parse(localStorage.getItem('array'));
    this.toggle = localStorage.getItem('toggle') == 'true';
  }

  getRooms(event): void {
    event.preventDefault(); 
    const target = event.target;
    const date = target.querySelector('#check-in').value;
    this.roomsService.getAvailableRooms(date).subscribe(data => {
      // const ne: NavigationExtras = {
      //   state: {
      //     rooms: data
      //   }
      // };
      // this.router.navigate(['available'], ne);
      // console.log(data);
      this.rooms = data.data;
      localStorage.removeItem('array');
      localStorage.setItem('array', JSON.stringify(this.rooms));
      localStorage.removeItem('toggle');
      localStorage.setItem('toggle', 'true');
      this.toggle = true;
    });
  }
  myFunction(event): void {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}