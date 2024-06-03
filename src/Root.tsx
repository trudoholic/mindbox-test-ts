import { Component } from "react";

import { Modal } from "./Modal";
import { Invites } from "./Invites";

interface State {
  invites: string[];
  opened: boolean;
}

export class Root extends Component<NonNullable<unknown>, State> { // <---{}
  public readonly state: State = {
    invites: [],
    opened: false
  };

  public toggle(opened: boolean) {
    this.setState({...this.state,  opened: opened}); // <--- (1)
  }

  public invite(name: string) {
    this.setState({...this.state,  invites: [
      ...this.state.invites, name
    ]}); // <--- (3)
  }

  public render() {
    return (
      <>
        <button onClick={() => this.toggle(true)}>Open invites list</button>
        <Modal opened={this.state.opened} onClose={() => this.toggle(false)}>
          <Invites
            invites={this.state.invites}
            onAdd={this.invite.bind(this)}
          />
        </Modal>
      </>
    );
  }
}
