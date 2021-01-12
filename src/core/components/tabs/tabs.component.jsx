import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './tabs.scss'

import TabItem from './tab-item/tab-item.component'

export default class Tabs extends Component {
	static propTypes = {
		className: PropTypes.string,
		children: PropTypes.instanceOf(Array).isRequired
	}

	static defaultProps = {
		className: null
	}

	constructor(props) {
		super(props)

		this.state = {
			activeTab: this.props.children[0].props.label
		}
	}

	onClickTabItem = (tab) => {
		this.setState({ activeTab: tab })
	}

	render() {
		const {
			onClickTabItem,
			props: { children },
			state: { activeTab }
		} = this

		return (
			<div className={`tabs ${this.props.className}`}>
				<ol className='tab-list'>
					{children.map((child) => {
						const { label } = child.props

						return (
							<TabItem
								activeTab={activeTab}
								key={label}
								label={label}
								onClick={onClickTabItem}
							/>
						)
					})}
				</ol>
				<div className='tab-content'>
					{children.map((child) => {
						if (child.props.label !== activeTab) return undefined
						return child.props.children
					})}
				</div>
			</div>
		)
	}
}
