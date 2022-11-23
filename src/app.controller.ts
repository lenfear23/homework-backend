// app.controller.ts
import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {

   

    let users = {
      
      "user":[{
        "name":"Gipsz Jakab",
        "gender":"férfi",
        "birth": "1783.02.10",
        "balance": 155000,
        "activity":"active"
      }
      ,{
        "name":"Alma Laci",
        "gender":"férfi",
        "birth": "1183.07.30",
        "balance": 7055000,
        "activity":"inactive"
      },{
        "name":"Hű Jenő",
        "gender":"férfi",
        "birth": "2583.03.60",
        "balance": 10,
        "activity":"active"
      },{
        "name":"Uzson Tamás",
        "gender":"férfi",
        "birth": "2083.03.70",
        "balance": 6000,
        "activity":"inactive"
      },{
        "name":"Petőfi Sanyi",
        "gender":"nő",
        "birth": "23.12.21",
        "balance": 900000000,
        "activity":"active"
      },{
        "name":"Alekosz",
        "gender":"férfi",
        "birth": "1000.01.01",
        "balance": 1500005000,
        "activity":"active"
      }
    
    ]
    }
    
    return { message: 'Hello world!' , users};
  }
}