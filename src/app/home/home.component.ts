import { Component, OnInit } from '@angular/core';
import { Ability, AbilityBuilder } from '@casl/ability';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor (private ability: Ability) { }

  ngOnInit(): void {

    console.log('started');

  }

  Admin() {

    this.Logout();

    const { can, rules } = new AbilityBuilder();

    // This is where would call the API for the permissions
    can('read', 'user');
    can('add', 'user');
    can('edit', 'user');
    this.ability.update(rules as []);

    console.log(rules);
    return rules;
  }

  Reader() {

    const { can, rules } = new AbilityBuilder();

    // This is where would call the API for the permissions
    can('read', 'user');
    this.ability.update(rules as []);

    console.log(rules);
    return rules;
  }

  Super() {

    const { can, rules } = new AbilityBuilder();

    // This is where would call the API for the permissions
    // Manage & All is basically everything as escapes in CASL
    can('manage', 'all');
    this.ability.update(rules as []);
    console.log(rules);
    return rules;
  }

  Logout() {
    this.ability.update([]);
  }

}