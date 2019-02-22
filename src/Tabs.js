import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const tabElements = props.children.map(child => {
      return (
        {
          title: child.props.title,
          text: child.props.children,
        }
      );
    })

    this.state = {
      visibleTabId: tabElements[0].title,
      tabElements,
    }
  }


  handleTabClick = (title = 'no title', text = 'no text') => {
    this.setState({ visibleTabId: title });

    if (this.props.onTabSelected) {
      this.props.onTabSelected({title, text});
    }
  }

  render() {
    const tabs = this.state.tabElements.map(tab =>
    {
      return (
        <button 
          key={tab.title}
          className={tab.title === this.state.visibleTabId ? 'active' : ''}
          onClick={() => this.handleTabClick(tab.title, tab.text)}
        >
          {tab.title}
        </button>
      );
    });

    const visibleTab = this.props.children.filter(tab => tab.props.title === this.state.visibleTabId);

    return (
    <div>
      <div className="tabs-list">
        {tabs}
      </div>
      {visibleTab}
    </div>
    );
  }
}

export default Tabs;
