import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  tabs = [
    'Home',
    'Dashboard',
    'Contas',
    'Rede Credenciais',
    'Notificações',
    'Usuários do Sistema',
    'Favoritos',
    'FAQ',
    'Payloads de Erros Dock',
    'Configurações'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
