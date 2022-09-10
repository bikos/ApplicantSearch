import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';
import { environment } from 'src/environments/environment';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];


  private octokit = new Octokit({
    auth: environment.token
  });

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public async getuserinfo(sString: string){
    try {
      // const result = await this.octokit.request("GET /repos/{owner}/{repo}/issues", {
      //     owner: "octocat",
      //     repo: "Spoon-Knife",
      //   });

      // let's try getting uers
      // const result = await this.octokit.request('GET /users/{user}', {
      //   user: 'bikos'
      // })

      return this.octokit.request('GET /search/users', {q: `${sString}+in:user`});


      // get repos from : "https://api.github.com/users/bikos/repos"


      // const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})



    } catch (error) {
      // console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
      console.log(error);
    }
  }
}
