import { Component } from "react";
import "semantic-ui-css/semantic.min.css"
import { Feed, Grid, Icon,Image,Label,  List, Menu,Search,Table } from "semantic-ui-react";



class App extends Component{
  render(){
    return(
      <div>
        <br/>
  
  
    
    <Grid textAlign="center" container columns={1}>
      <Grid.Column>
      <Table celled>
        <Table.Header>
          <Table.Row textAlign="right">
          <Table.HeaderCell colSpan='2'><Search placeholder="Search dokument"/></Table.HeaderCell>
            
          
          </Table.Row>
        </Table.Header>
    <Table.Header>
      <Table.Row textAlign="center">
        <Table.HeaderCell>Nama Dokument</Table.HeaderCell>
        <Table.HeaderCell>Jenis File</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell positive>
          <Label ribbon>Panduan Belajar Javascript</Label>
        </Table.Cell>
        <Table.Cell>PDF</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Panduan Belajar CSS</Table.Cell>
        <Table.Cell>PDF</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Panduan Belajar React JS</Table.Cell>
        <Table.Cell>PDF</Table.Cell>
        
      </Table.Row>
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
      </Grid.Column>
    </Grid>
    <Grid container columns={4}>
      <Grid.Column>
        <Feed  size="large">
          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Anton</Feed.User> added you as a friend
                <Feed.Date>3 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like"/> 4 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
          <Feed.Event>
          <Feed.Label icon='pencil' />
      <Feed.Content>
        <Feed.Summary>
          You submitted a new post to the page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Saya senang Belajar Bahasa Pemrograman.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>11 Likes</Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
     <Feed.Label image=" https://react.semantic-ui.com/images/avatar/small/helen.jpg"/>
     <Feed.Content>
      <Feed.Summary>
        <Feed.Date>4 days ago</Feed.Date>
      </Feed.Summary>
      <Feed.Summary>
      David added 2 new Image
      </Feed.Summary>
      <Feed.Extra images>
        <Image size="tiny" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"/>
        <Image size="tiny" src=" https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png"/>
      </Feed.Extra>
      <Feed.Meta like='2 Like' />
      </Feed.Content>
    </Feed.Event>
        </Feed>
      </Grid.Column>
      <Grid.Column>
      
      </Grid.Column>
      <Grid.Column>
      
      </Grid.Column>
      <Grid.Column>
      <h3>Website terkait</h3>
        <List>
        <List.Item
          icon='linkify'
          content={<a href='https://www.google.com/'>Google</a>}
        />
        <List.Item
        icon='linkify'
        content={<a href='https://www.facebook.com/'>Facebook</a>}
        />
      <List.Item
          icon='linkify'
          content={<a href='http://www.semantic-ui.com'>Semantic UI</a>}
        />
        <List.Item
          icon='linkify'
          content={<a href="https://niomic.id/">Niomic</a>}
        />
        <List.Item
          icon='linkify'
          content={<a href='https://react.dev/'>react</a>}
        />
        </List>
      </Grid.Column>
    </Grid>
    
    
      </div>
     
    )
  }
}

export default App;
