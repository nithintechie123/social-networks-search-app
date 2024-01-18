import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const addActiveTabStyle = isActive ? 'active-button' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`tab-button ${addActiveTabStyle}`}
        type="button"
        onClick={onClickTabItem}
      >
        <p className="tab-name">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
