import React from 'react'

import SidePanelComponent from '../side-panel/side-panel.component'
import ChatPanelComponent from '../chat-panel/chat-panel.component'
import MetaPanelComponent from '../meta-panel/meta-panel.component'

function HomePage() {
	return (
		<React.Fragment>
			<SidePanelComponent />
			<ChatPanelComponent />
			<MetaPanelComponent />
		</React.Fragment>
	)
}

export default HomePage
