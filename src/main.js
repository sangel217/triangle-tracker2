import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hello } from './myCode';

$().ready(function(){
  hello();
});