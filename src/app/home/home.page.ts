import { Component } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName ,ContactFieldType } from '@ionic-native/contacts/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(private camera: Camera,private kontak: Contacts) {}
	
	ngOnInit() {
		this.getNumberPhone();
	}	

	kontakdata:any   =  [];
	getNumberPhone() {
		this.kontak.find(["displayName","phoneNumbers","photos"],{
			multiple: true,
			hasPhoneNumber: true
		}).then((hasil) => {
			for (let i = 0; i < hasil.length; i++) {
				let NamaKontak 	 	= 	  hasil[i].displayName;
				let NomorTelepon 	= 	  hasil[i].phoneNumbers[0].value;
				this.kontakdata.push({nama: NamaKontak, nomor: NomorTelepon});
			}
		});
		console.log(this.kontakdata);
	}

	Kamera() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.FILE_URI,
			encodingType:    this.camera.EncodingType.JPEG,
			mediaType:  	 this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options)
		 	.then((datafoto) => {
		 		console.log(datafoto);
		 	}, pusing => {
		 		console.log(pusing);
		 	})
	}
}
