import { Injectable } from '@angular/core';
import { NavMenu } from '../models/nav.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  name: string = 'theJsOcean';
  year: number = new Date().getFullYear();
  login: string = 'Login';
  loginText: string = "If you don't have an account, please click on";
  register: string = 'Register';
  registerText: string = 'If you have an account, please click on';
  rememberMe: string = 'remember me';
  forgotPassword: string = 'Forgot Password';
  welcomeTitle: string = 'Welcome to theJsOcean';
  welcomeText: string =
    'At theJsOcean, we build products & solutions that redefine the food ordering & delivery space in India, every single day. The best part? Every bit of your work at Swiggy will help us change the way India eats!';
  footerText: string = 'All rights reserved, powerd by ';
  poweredBy: string = 'startx.com';
  singin: string = 'Sign In';
  signup: string = 'Sign Up';
  socialText: string = 'Sign in with google and facebook';
  googleText: string = 'Google';
  fbText: string = 'Facebook';
  totalStudent: string = 'Total student';
  satisfyUser: string = 'Satisfy student';

  userMenu: NavMenu[] = [
    new NavMenu('u001', 'Dashboard', 'fa-th', '/dashboard'),
    new NavMenu('u002', 'Courses', 'fa-book', '/course'),
    new NavMenu('u003', 'Favorites', 'fa-heart-o', '/favorites'),
    new NavMenu('u004', 'Profile', 'fa-user', '/profile'),
    new NavMenu('u004', 'Setting', 'fa-cog', '/setting'),
  ];

  adminMenu: NavMenu[] = [
    new NavMenu('a001', 'Dashboard', 'fa-th', '/dashboard'),
    new NavMenu('a002', 'Courses', 'fa-book', '/course', [
      new NavMenu('a002_1', 'All Course', 'fa-th', '/all-course'),
      new NavMenu('a002_2', 'Course Category', 'fa-th', '/category'),
      new NavMenu('a002_3', 'Add Lession', 'fa-th', '/lession'),
      new NavMenu('a002_4', 'Add Quiz', 'fa-th', '/quiz'),
    ]),
    new NavMenu('a003', 'Pages', 'fa-page', '/pages'),
    new NavMenu('a004', 'Themes', 'fa-theme', '/themes'),
    new NavMenu('a005', 'Users', 'fa-users', '/users'),
  ];
  constructor() {}
}
