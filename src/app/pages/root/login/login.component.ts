import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  // eslint-disable-next-line max-len
  public oauth2 = 'https://login.microsoftonline.com/98f040fe-7e06-4d87-95ab-dc04af2c44ec/oauth2/authorize?client_id=433dd8a8-1973-4979-89dc-275bf5851afd&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%2F&resource=40662057-6321-44ec-bdf6-8bd32c44eaf2&response_mode=fragment&state=12345&nonce=678910&sso_reload=true';

  constructor() { }

  ngOnInit() {}

}
