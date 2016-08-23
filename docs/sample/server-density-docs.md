# Generic components

Before you write a piece of functionality check if there is already a component that does that for you.

## Index


### Unused components (4)

It looks like these components are not used anywhere.  Can they be deleted?

* [ChartsDataFilter](#chartsdatafilter)
* [CreditCardInput](#creditcardinput)
* [Textarea](#textarea)
* [ViewMore](#viewmore)


### Used components (54)

These components are used by at-least one component or view.

* [AccordianDropdown](#accordiandropdown)
* [ActionsBar](#actionsbar)
* [AlertConfigLink](#alertconfiglink)
* [AlertConfigsBase](#alertconfigsbase)
* [AlertConfigSummary](#alertconfigsummary)
* [AutoExpire](#autoexpire)
* [BackNav](#backnav)
* [ChartBase](#chartbase)
* [ChartsScale](#chartsscale)
* [ColorPicker](#colorpicker)
* [ContactLink](#contactlink)
* [ContentEditable](#contenteditable)
* [CopyToClipboard](#copytoclipboard)
* [DateRangeSelector](#daterangeselector)
* [DateSelectorView](#dateselectorview)
* [DeleteTimer](#deletetimer)
* [DropdownControls](#dropdowncontrols)
* [DropdownListKeyboardControls](#dropdownlistkeyboardcontrols)
* [DropdownNestedListKeyboardControls](#dropdownnestedlistkeyboardcontrols)
* [FetchMore](#fetchmore)
* [FilterReact](#filterreact)
* [Flag](#flag)
* [FormInfo](#forminfo)
* [GroupAlertConfigs](#groupalertconfigs)
* [InstanceActionsMenu](#instanceactionsmenu)
* [InventoryAlertConfigs](#inventoryalertconfigs)
* [InventoryLink](#inventorylink)
* [IPVersion](#ipversion)
* [ItemSelector](#itemselector)
* [ItemTagList](#itemtaglist)
* [ItemTagListDropdown](#itemtaglistdropdown)
* [ListActionsMenu](#listactionsmenu)
* [LoadingIndicator](#loadingindicator)
* [LoadingPage](#loadingpage)
* [MassActionsEnabledList](#massactionsenabledlist)
* [MassActionsMenu](#massactionsmenu)
* [OverflowScroll](#overflowscroll)
* [paginator](#paginator)
* [PasswordInput](#passwordinput)
* [PersistentSearch](#persistentsearch)
* [PhoneInput](#phoneinput)
* [SaveStatus](#savestatus)
* [SaveStatusFeedback](#savestatusfeedback)
* [Search](#search)
* [SelectedItemsLocations](#selecteditemslocations)
* [ServiceMonitorErrorsLink](#servicemonitorerrorslink)
* [ServiceProvider](#serviceprovider)
* [TabbedViews](#tabbedviews)
* [Tag](#tag)
* [TextField](#textfield)
* [toggle](#toggle)
* [UserLink](#userlink)
* [ValidatableInput](#validatableinput)
* [XButton](#xbutton)









## Unused Components (4)


### ChartsDataFilter

* Path: [views/generic/charts/data-filter](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/charts/data-filter.csx.coffee)
* 52 lines of code

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* creates @props.filter if ones doesn't exist
* does not mutate @props.data


**Render Method**

````
            # we clone the data to ensure the filter won't mutate the props
            filteredData    = @props.filter( JSON.parse( JSON.stringify(@props.data) ) )
            childProps      = _.extend({data: filteredData}, _.pick(@props, 'width', 'height', 'scales'))

            children    = React.Children.map @props.children, (child) =>
                React.cloneElement(child, childProps, child.props.children)

            return (
                <g className="charts-data-filter-base">
                    {children}
                </g>
            )
````

### CreditCardInput

* Path: [views/generic/inputs/credit-card-input](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/inputs/credit-card-input.csx.coffee)
* 80 lines of code

**Unit Tests**


Could not find any unit tests for this component

**Render Method**

````
			cardType = @state.activeCardBrand or 'unknown'

			return (
				<div className="credit-card-input">
					<img
						className="cc-icon"
						src={ "/app/assets/images/icons/credit-cards/" + cardType + ".svg" }
						alt={ cardType + ' card icon' }
						title={ _string.humanize(cardType + ' type') }
					/>

					<TextField
						ref="input"
						className="cc-number-input"
						placeholder="Credit card number"
						regex={ new RegExp('^[0-9]+$') }
						value={ @state.currentNumber }
						onChange={ @onTypeCCNumber }
					/>
				</div>
			)
````

### Textarea

* Path: [views/generic/forms/textarea](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/textarea.csx.coffee)
* 91 lines of code

**Unit Tests**


Could not find any unit tests for this component

**Render Method**

````
      if @props.autoResize?
        styles = {
          height: @state.autoResizeHeight
          minHeight: @props.minHeightForResize
        }

      return (
        <textarea placeholder={@props.placeholder}
                  onChange={@onChange}
                  value={@state.value}
                  ref={@props.ref}
                  id={@props.id}
                  className={@props.className}
                  style={styles}
        />
      )
````

### ViewMore

* Path: [views/generic/view-more](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/view-more.csx.coffee)
* 62 lines of code

**Unit Tests**


Could not find any unit tests for this component

**Render Method**

````
			activeItems = if @state.open then @props.items else @props.items.slice(0, @props.itemsToDisplay)
			formattedItems = activeItems.map @props.itemFormatter

			return (
				<div className="view-more-base">
					{if @state.open
						<div>
							{formattedItems}

							{if activeItems.length > @props.itemsToDisplay
								<p className="view-link" onClick={@handleViewMore}>{@props.viewLessText}</p>
							}
						</div>
					}

					{if !@state.open
						<div>
							{formattedItems}

							{if activeItems.length < @props.items.length
								<p className="view-link" onClick={@handleViewMore}>{@props.viewMoreText}</p>
							}
						</div>
					}
				</div>
			)
````










## Used Components (54)


### AccordianDropdown

* Path: [views/generic/lists/accordian-dropdown](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/accordian-dropdown.csx.coffee)
* 428 lines of code

**Used By:**
* [views/dashboards/widgets/latest-value/wrapper/edit](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/dashboards/widgets/latest-value/wrapper/edit.csx.coffee)
* [views/dashboards/widgets/open-alerts/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/dashboards/widgets/open-alerts/base.coffee)
* [views/dashboards/widgets/service-status/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/dashboards/widgets/service-status/base.csx.coffee)
* [views/generic/alert-configs/configs/config/action-settings/actions](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/action-settings/actions.csx.coffee)
* [views/generic/alert-configs/configs/config/metrics-selection](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/metrics-selection.csx.coffee)
* [views/generic/lists/accordian-dropdown](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/accordian-dropdown.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* sets open to false by default
* sets open to true if the initiallyOpen prop is true
* set no parents open if there are multiple parents
* opens the parent if there is only one parent
* sets focussedItemIndex to -1 (so no item is selected)
* handles an initialSelectedItemPath for an item that doesnt exist
* sets selectedItemPath for top level items without children
* sets selectedItemName
* sets the selectedItemName using @props.formatSelectedItemName() if specified
* sets selectedItemPath for nested tree items
* Opens when clicked and already closed
* Renders a search input when open
* Closes when clicked and already open
* Renders 'please select...' if no item is selected and no there is no placeholder prop
* Renders the placeholder prop if specified and no item is selected
* Renders the selected item name if an item is selected
* informs the delegate when closing
* informs the delegate when opening
* Renders + or - icons to indicate a parent's open or closed state
* Shows or hides children
* closes the dropdown when an item is selected
* updates the selectedItemName and selectedItemPath when an item is selected
* highlights the selected item with a tick
* informs the delegate of the selectedItemName and selectedItemPath
* Opens all trees and removes items that don't match when there is a search term
* Resets back to its initial state when the search term is deleted
* focusses the first matching selectable item in the list

**Render Method**

````
			itemIndex 	= -1
			items 		= filterItems(@props.initialItems, @state.searchTerm)

			componentClasses = cx
				"accordian-dropdown": true
				"is-open": @state.open

			return (
				<DropdownControls
					getWrapperDOMNode={=> return @refs.wrapper }
					setOpenState={@setOpenState}
					setLastKeyCodeForKeyDown={@setLastKeyCodeForKeyDown}
					toggleOpenState={@toggleOpenState}
					open={@state.open}
				>
					<div className={componentClasses} ref="wrapper" tabIndex="0">
						<AccordianDropdownPlaceholder
							ref={'placeholder'}
							placeholder={@props.placeholder}
							selectedItemName={@state.selectedItemName}
							didClick={@didClickPlaceholder}
						/>
						{ if @state.open
							<DropdownNestedListKeyboardControls
								getFocussedItemDOMNode={=> return @refs['focussed-item'] }
								didSelectItem={@didClickItem}
								didSelectParent={@didClickParent}
								addOpenTree={@addOpenTree}
								removeOpenTree={@removeOpenTree}
								openTreesContainsItem={@openTreesContainsItem}

							>
								<DropdownListKeyboardControls
									didSelectItem={@didClickItem}
									getFocussedItemIndex={@getFocussedItemIndex}
									setFocussedItemIndex={@setFocussedItemIndex}
									getTotalItemsCount={@getTotalItemsCount}
									getFocussedItemDOMNode={=> return @refs['focussed-item'] }
									handleItemSelection={false}
								>
									<div className="acd-content" ref="content">
										<Search
											ref="searchInput"
											type="compact"
											didChange={@didChangeSearch}
											placeholder="Enter search..."
											autofocus={true}
										/>
										<div className="acd-results" ref="results">
											{if !items.length
												<div className="acd-empty">{"no results for " + @state.searchTerm + "..."}</div>
											}
											{if items.length
												<ul ref="results-list" className="acd-parent-list">
													{for item in items
														<li key={getItemPathAsJSONString(item)}>
															{if item.tree?.length > 0
																path = getItemPathAsJSONString(item)
																<span>
																	<strong
																		data-index={itemIndex = itemIndex + 1}
																		ref={if itemIndex is @state.focussedItemIndex then 'focussed-item' else 'available-item'}
																		className={cx({
																			'is-focussed': itemIndex is @state.focussedItemIndex
																			'icon-before-tick': path is @state.selectedItemPath
																			'acd-parent-item': true
																			'acd-item': true
																		})}
																		data-parent-key={item.key}
																		onClick={@didClickParent}
																	>
																		{ if _.indexOf(@state.openTrees, item.key) > -1
																			<span className="parent-icon icon-before-minus"></span>
																		else
																			<span className="parent-icon icon-before-plus"></span>
																		}
																		{item.name}
																	</strong>
																	{if _.indexOf(@state.openTrees, item.key) > -1
																		<ul className="acd-child-list">
																			{for child in item.tree
																				if !child.tree or !child.tree.length
																					path = getItemPathAsJSONString(item, child)
																					<li key={path}>
																						<span
																							data-index={itemIndex = itemIndex + 1}
																							ref={if itemIndex is @state.focussedItemIndex then 'focussed-item' else 'available-item'}
																							className={cx({
																								'is-focussed': itemIndex is @state.focussedItemIndex
																								'icon-before-tick': path is @state.selectedItemPath
																								'acd-item': true
																								'acd-child-item': true
																							})}
																							data-path={path}
																							onClick={@didClickItem}
																						>
																							{child.name}
																						</span>
																					</li>
																				else
																					for child2 in child.tree
																						path = getItemPathAsJSONString(item, child, child2)
																						<li key={path}>
																							<span
																								data-index={itemIndex = itemIndex + 1}
																								ref={if itemIndex is @state.focussedItemIndex then 'focussed-item' else 'available-item'}
																								data-path={path}
																								onClick={@didClickItem}
																								className={cx({
																									'is-focussed': itemIndex is @state.focussedItemIndex
																									'icon-before-tick': path is @state.selectedItemPath
																									'acd-item': true
																									'acd-child-item': true
																								})}
																							>
																								{child.name + " > " + child2.name}
																							</span>
																						</li>
																			}
																		</ul>
																	}
																</span>
															else
																path = getItemPathAsJSONString(item)
																<span
																	data-index={itemIndex = itemIndex + 1}
																	ref={if itemIndex is @state.focussedItemIndex then 'focussed-item' else 'available-item'}
																	data-path={path}
																	onClick={@didClickItem}
																	className={cx({
																		'is-focussed': itemIndex is @state.focussedItemIndex
																		'icon-before-tick': path is @state.selectedItemPath
																		'acd-item': true
																	})}
																>
																	{item.name}
																</span>
															}
														</li>
													}
												</ul>
											}
										</div>
									</div>
								</DropdownListKeyboardControls>
							</DropdownNestedListKeyboardControls>
						}
					</div>
				</DropdownControls>
			)
````


### ActionsBar

* Path: [views/generic/actions-bar](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/actions-bar.csx.coffee)
* 39 lines of code

**Used By:**
* [views/alert-history/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/alert-history/base.csx.coffee)
* [views/devices/detail/info-bar](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/info-bar.csx.coffee)
* [views/devices/detail/snapshots/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/snapshots/base.csx.coffee)
* [views/generic/alert-configs/group](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/group.csx.coffee)
* [views/generic/alert-configs/inventory](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/inventory.csx.coffee)
* [views/preferences/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/base.csx.coffee)
* [views/services/detail/info-bar](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/info-bar.csx.coffee)
* [views/tags/detail/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/detail/base.csx.coffee)
* [views/tags/detail/tagged-items/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/detail/tagged-items/base.csx.coffee)
* [views/tags/list/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/list/base.csx.coffee)

**Unit Tests**


**Render Method**

````
			classes = "actions-bar clearfix"

			if @props.type
				classes += (" " + typeClassesMap[@props.type])

			return (
				<div className={classes}>
					{ @props.children }
				</div>
			)
````


### AlertConfigLink

* Path: [views/generic/links/alert-config-link](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/links/alert-config-link.csx.coffee)
* 59 lines of code

**Used By:**
* [views/generic/alert-configs/summary](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/summary.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* should be focusable
* responds to the enter key
* responds to a click
* subscribes to the alert configs mounting
* navigates to the device
* navigates to the service
* navigates to the service group
* navigates to the device group

**Render Method**

````
            return (
                <span
                    aria-label="view the alert config that triggered this alert"
                    tabIndex="0"
                    onClick={@didClick}
                    onKeyDown={@didKeyDown}
                    className="alert-config-link-base"
                >
                    {@props.children}
                </span>
            )
````


### AlertConfigsBase

* Path: [views/generic/alert-configs/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/base.csx.coffee)
* 38 lines of code

**Used By:**
* [views/generic/alert-configs/group](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/group.csx.coffee)
* [views/generic/alert-configs/inventory](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/inventory.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* uses the loading class if props.loading
* uses the blank slate class if props.showBlankSlate
* uses the correct type class (tag or inventory)

**Render Method**

````
            classes = cx
                "alert-configs-base-wrapper": true
                loading: @props.loading
                showBlankSlate: @props.loading is false and @props.showBlankSlate
                "inventory-alerts": @props.type is "inventory"
                "group-alerts": @props.type is "group"
                "tag-alerts": @props.type is "tag"

            return (
                <div className={classes}>
                    {@props.children}
                </div>
            )
````


### AlertConfigSummary

* Path: [views/generic/alert-configs/summary](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/summary.csx.coffee)
* 111 lines of code

**Used By:**
* [views/alert-history/table-row/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/alert-history/table-row/base.csx.coffee)
* [views/notification-center/triggered-alerts/triggered-alert](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/notification-center/triggered-alerts/triggered-alert.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* sets inital state
* checks if metrics are ready
* shows a loading state
* informs the user the device or service has been deleted
* informs the user the device or service has been deleted
* renders the alert config summary
* renders an alert config link
* gets the metric info using @props.fullField and @props.subjectType
* gets the metric info using @props.fullField and deviceAlertsGroup
* gets the metric info from the metrics helper
* renders the fullName
* renders the @props.config.fullName
* renders the comparison
* does not render the comparison
* renders the value
* does not render the value
* does not render a subject
* renders the subject
* renders the locations threshold
* renders a service monitor errors link

**Render Method**

````
            if @state.metricsReady and @props.notFound isnt true
                fullName = @props.config.fullName

                if not fullName
                    subjectType = switch
                        when @props.subjectType.indexOf("Group") > -1
                            @props.subjectType.split("Group")[0] + "AlertsGroup"
                        else
                            @props.subjectType + "Alerts"

                    fullName = MetricsHelper.getMetricInfo(@props.config.fullField, subjectType)?.fullName

                # Last resort incase it's a plugin
                # AND we don't have @props.config.fullName
                if not fullName
                    fullName = @props.config.section + " > " + @props.config.field

            return (
                <span className="alert-config-summary-base">
                    {if _.isString(@props.subjectId) is false or @props.notFound
                        <strong ref="deleted">{"Alert for deleted " + (@props.subjectType or "item")}</strong>
                    else if @state.metricsReady is false
                        <LoadingIndicator ref="loading" type="compact"/>
                    else
                        <span ref="summary" className="acs-config-wrapper">
                            <AlertConfigLink ref="alert-config-link" subjectId={@props.subjectId} subjectType={@props.subjectType} configId={@props.config._id}>
                                <span ref="full-name" className="acs-part acs-full-name">{fullName}</span>
                                {if @props.config.comparison
                                    <span ref="comparison" className="acs-part acs-comparison">{Config.comparisons[@props.config.comparison]}</span>
                                }
                                {if @props.config.value
                                    <span ref="value" className="acs-part acs-value">{@props.config.value}</span>
                                }
                                {if @props.config.subject
                                    <span className="acs-label-part-wrapper">
                                        <em className="acs-part acs-label uiText">for</em>
                                        <span ref="subject" className="acs-part acs-comparison">{@props.config.subject}</span>
                                    </span>
                                }
                                {if @props.subjectType.indexOf("service") > -1 and @props.config.locationsThreshold
                                    <span className="acs-label-part-wrapper">
                                        <em className="acs-part acs-label uiText">from</em>
                                        <span ref="locations" className="acs-part acs-comparison">{@props.config.locationsThreshold}</span>
                                        <em className="acs-part acs-label uiText">{"location" + if @props.config.locationsThreshold > 1 then "s" else ""}</em>
                                    </span>
                                }
                            </AlertConfigLink>
                            {if @props.subjectType.indexOf("service") > -1 and @props.subjectType.indexOf("Group") is -1
                                <SMErrorsLink
                                    ref="sm-errors-link"
                                    serviceId={@props.subjectId}
                                    triggeredAlertId={@props.triggeredAlertId}
                                    configId={@props.config._id}
                                    openDateTime={@props.openDateTime}
                                />
                            }
                        </span>
                    }
                </span>
            )
````


### AutoExpire

* Path: [views/generic/auto-expire](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/auto-expire.csx.coffee)
* 38 lines of code

**Used By:**
* [views/generic/save-status-feedback](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/save-status-feedback.csx.coffee)

**Unit Tests**


**Render Method**

````
      content = if @state.isShowing then @props.children else ''

      return (
        <div>
          {content}
        </div>
      )
````


### BackNav

* Path: [views/generic/back-nav](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/back-nav.csx.coffee)
* 51 lines of code

**Used By:**
* [views/preferences/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* renders the url name
* renders the url type (device or service)
* renders a link
* responds to clicks
* responds to the enter key

**Render Method**

````
            linkNameClasses = [
                "link-name"
                if @props.type then "is-" + @props.type.toLowerCase()
            ]

            return (
                <div className="back-nav-base">
                    <span ref="link-wrapper" className="link-wrapper" tabIndex="0" onClick={@didClickNav} onKeyDown={@didKeyDownNav} title={"Go back to " + @props.url}>
                        <span className="icon-before-arrow-left icon"></span>
                        Back to:
                        <span ref="name" className={cx(linkNameClasses)}>
                            {@props.name}
                        </span>
                    </span>
                </div>
            )
````


### ChartBase

* Path: [views/generic/charts/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/charts/base.csx.coffee)
* 37 lines of code

**Used By:**
* [views/dashboards/widgets/latest-value/wrapper/values](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/dashboards/widgets/latest-value/wrapper/values.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* renders an svg elemet
* renders a default width and height
* can render a custom width an height
* passes it's width & height to it's children

**Render Method**

````
            children = React.Children.map @props.children, (child) =>
                React.cloneElement(child, _.pick(@props, "width", "height"), child.props.children)

            return (
                <svg className="chart-base-base" width={@props.width} height={@props.height}>
                    {children}
                </svg>
            )
````


### ChartsScale

* Path: [views/generic/charts/scale](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/charts/scale.csx.coffee)
* 96 lines of code

**Used By:**
* [views/dashboards/widgets/latest-value/wrapper/values](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/dashboards/widgets/latest-value/wrapper/values.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* creates linear scales for both axis
* uses the smallest & largest x values for the domain
* uses the width for the range
* always uses @props.height as the range, rounding the number slightly
* uses the minimun y value in the dataset for the domain
* creates a scale with the min y value set to 0
* creates a y scale using the minimum y value in the dataset
* creates a y scale using @props.minY as the minimum y value

**Render Method**

````
            scales      = getScales(@props)
            childProps  = _.extend({}, {scales: scales}, _.pick(@props, 'data', 'width', 'height'))
            children    = React.Children.map @props.children, (child) =>
                React.cloneElement(child, childProps, child.props.children)

            return (
                <g className="charts-scale-base">
                    {children}
                </g>
            )
````


### ColorPicker

* Path: [views/generic/color-picker](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/color-picker.csx.coffee)
* 68 lines of code

**Used By:**
* [views/tags/list/tag](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/list/tag.csx.coffee)
* [views/tags/list/tag-creator](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/list/tag-creator.csx.coffee)

**Unit Tests**


**Render Method**

````
			return (
				<div className="color-picker cp-default active clearfix" ref="component">
					<ColorPickerPlugin
						value={@state.color}
						onDrag={@didChangeColor}
						onChange={@didChangeColor}
						saturationWidth={200}
						saturationHeight={200}
						hueWidth={30}
						hueHeight={200}
					/>
					<input type="text" className="hex-input" placeholder={ "Hex color E.g " + @defaultColor } ref="hexInput" onChange={ @didUpdateHexInput } value={ @state.color } />
				</div>
			)
````


### ContactLink

* Path: [views/generic/contact-link](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/contact-link.csx.coffee)
* 30 lines of code

**Used By:**
* [views/devices/detail/install-agent-blank-slate](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/install-agent-blank-slate.csx.coffee)
* [views/devices/detail/snapshots/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/snapshots/base.csx.coffee)
* [views/four-hundred-error/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/four-hundred-error/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Asks the user to contact support
* Opens the contact form when clicked

**Render Method**

````
			return (
				<a href="#" onClick={@didClick} role="button" data-ignore-href>
					{if @props.children then @props.children else "contact support"}
				</a>
			)
````


### ContentEditable

* Path: [views/generic/forms/content-editable](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/content-editable.csx.coffee)
* 112 lines of code

**Used By:**
* [views/generic/alert-configs/configs/config/action-settings/wait-repeat](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/action-settings/wait-repeat.csx.coffee)
* [views/generic/alert-configs/configs/config/metrics-selection](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/metrics-selection.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* sets the value to the initialValue, the placeholder or edit...
* adds aditional classes
* updates the value if it recieves different props and is not focussed
* removes the placeholder
* keeps the value
* informs the delegate
* informs the delegate

**Render Method**

````
			innerClasses =
				"content-editable-content": true

			if @props.innerClasses
				for className in @props.innerClasses.split(' ')
					innerClasses[className] = true

			return (
				<span className="content-editable-wrapper">
					<span
						ref="inner"
						onClick={@didClick}
						className=cx(innerClasses)
						onKeyDown={@didKeyDown}
						onFocus={@didFocus}
						onInput={@didChange}
						onBlur={@didBlur}
						contentEditable
					>
					</span>
				</span>
			)
````


### CopyToClipboard

* Path: [views/generic/copy-to-clipboard](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/copy-to-clipboard.csx.coffee)
* 153 lines of code

**Used By:**
* [views/devices/install-agent/instructions](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/install-agent/instructions.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Renders a dummy textarea to handle text manipulation
* Sets the correct button text
* Sets popovers correctly when attempting to copy
* removes the dummy text area for handling text manipulation

**Render Method**

````
            baseClasses = cx({
                'copy-to-clipboard-base': yes
                'copy-to-clipboard-base--overlay': @props.mode is 'overlay'
            })

            return (
                <div className={baseClasses}>
                    {if React.Children.count(@props.children) > 0
                        <div ref='text'>
                            {@props.children}
                        </div>
                    }

                    <button
                        ref='button'
                        className="copy-to-clipboard-button popover--top-right"
                        data-popover={@state.popover or 'Copy to Clipboard'}
                        onMouseUp={@handleMouseUp}
                        onKeyUp={@handleKeyUp}

                        onMouseOut={@handleMouseOut}
                        onBlur={@clearPopover}

                        type='button'
                    >
                        {@props.buttonText} <span className='icon-before-duplicate'></span>
                    </button>
                </div>
            )
````


### DateRangeSelector

* Path: [views/generic/date-range-selector-react](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/date-range-selector-react.csx.coffee)
* 161 lines of code

**Used By:**
* [views/alert-history/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/alert-history/base.csx.coffee)
* [views/services/detail/errors/react-base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/errors/react-base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* mounts
* displays time preset options
* displays time position options
* displays date input
* displays now button
* responds to preset change
* responds to position change
* now
* sets appropriate defaults
* uses props to set initial state

**Render Method**

````
			return (
				<div className="date-range-selector clearfix">
					<select name="timePresets" className="element" value={ @state.selectedPreset } onChange={ @didChangePreset } ref="timePreset">
						<optgroup label="Precision">
							<option value="30 minutes">30 minutes</option>
							<option value="1 hour">1 hour</option>
							<option value="2 hours">2 hours</option>
						</optgroup>
						<optgroup label="Overview">
							<option value="6 hours">6 hours</option>
							<option value="12 hours">12 hours</option>
							<option value="24 hours">24 hours</option>
							<option value="3 days">3 days</option>
							<option value="7 days">7 days</option>
							<option value="30 days">30 days</option>
						</optgroup>
						<optgroup label="Long term">
							<option value="2 months">2 months</option>
							<option value="6 months">6 months</option>
						</optgroup>
					</select>

					<select name="timeRangePosition" className="element" value={ @state.selectedTimePosition } onChange={ @didChangeTimePosition } ref="timePosition">
						<option value="before">before</option>
						<option value="after">after</option>
						<option value="around">around</option>
					</select>

					<div className="time-range-input element clearfix">
						<input ref="date" type="text" size="19" name="date" className="date" value={ @state.selectedDate } onChange={ @didChangeDate } />
						<button ref="timeNowButton" type="button" className="time-now-button" onClick={ @setDateToNow }>Now</button>
					</div>
				</div>
			)
````


### DateSelectorView

* Path: [views/generic/date-selector](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/date-selector.csx.coffee)
* 73 lines of code

**Used By:**
* [views/devices/detail/snapshots/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/snapshots/base.csx.coffee)

**Unit Tests**


**Render Method**

````
			current = @getUserTime()

			prevDisabled = 'disabled'
			nextDisabled = 'disabled'

			if not @props.isLoading
				prevDisabled = null if @props.timestamps.previous?.length > 0
				nextDisabled = null if @props.timestamps.next?.length > 0

			return (
				<div className='date-selector'>
					<h2 className="current">{ current }</h2>
					<button className="prev icon-before-arrow-left" onClick={ @didClickPrev } disabled={ prevDisabled } key="prev-date" data-prev></button>
					<button className="next icon-before-arrow-right" onClick={ @didClickNext } disabled={ nextDisabled } key="next-date" data-next></button>
					{if @props.isLoading
						<LoadingIndicator type="compact"></LoadingIndicator>
					}
				</div>
			)
````


### DeleteTimer

* Path: [views/generic/delete-timer](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/delete-timer.csx.coffee)
* 103 lines of code

**Used By:**
* [views/generic/table-row](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/table-row.coffee)
* [views/preferences/users/list/user](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/list/user.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* sets the initial state
* sets the default props
* sets the finish time
* calls the onFinish prop
* calls the onCancel prop

**Render Method**

````
			leftRingStyles 	= @getRingStyles('left')
			rightRingStyles = @getRingStyles('right')
			ringClasses 	= cx({
				ring: true
				gt50: @state.percentage > 50
			})

			return (
				<div className="delete-timer">
					<div className="value"></div>

					<button ref="cancel" className="delete-timer-cancel icon-before-cancel" onClick={@didClickCancel}>Cancel</button>

					<div className={ringClasses}>
						<div className="container">
							<div style={leftRingStyles} className="half left"></div>
							<div style={rightRingStyles} className="half right"></div>
						</div>

						<div className="shadow"></div>
					</div>
				</div>
			)
````


### DropdownControls

* Path: [views/generic/dropdown-controls/dropdown](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/dropdown-controls/dropdown.csx.coffee)
* 106 lines of code

**Used By:**
* [views/generic/alert-configs/configs/config/action-settings/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/action-settings/base.csx.coffee)
* [views/generic/item-selector](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-selector.csx.coffee)
* [views/generic/item-tag-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-tag-list.csx.coffee)
* [views/generic/item-tag-list-dropdown](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-tag-list-dropdown.csx.coffee)
* [views/generic/lists/accordian-dropdown](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/accordian-dropdown.csx.coffee)
* [views/generic/lists/instance-actions](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/instance-actions.csx.coffee)
* [views/generic/lists/mass-actions-enabled-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/mass-actions-enabled-list.csx.coffee)
* [views/preferences/billing/invoice-contact](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/invoice-contact.csx.coffee)
* [views/preferences/security/mfa/mfa](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/security/mfa/mfa.csx.coffee)
* [views/tags/list/tag](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/list/tag.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* responds to the escape key
* responds to document click
* ignores document clicks when moused over
* handles mouseovers

**Render Method**

````
			return (
				<div onKeyDown={@handleKeyDown} onMouseOver={@didMouseOver} onMouseOut={@didMouseOut}>
					{@props.children}
				</div>
			)
````


### DropdownListKeyboardControls

* Path: [views/generic/dropdown-controls/dropdown-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/dropdown-controls/dropdown-list.csx.coffee)
* 75 lines of code

**Used By:**
* [views/generic/item-selector](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-selector.csx.coffee)
* [views/generic/lists/accordian-dropdown](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/accordian-dropdown.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Should increment index with the down arrow
* Should decrement index with the up arrow
* Should select items with the enter key

**Render Method**

````
			return (
				<div onKeyDown={@handleKeyDown}>
					{@props.children}
				</div>
			)
````


### DropdownNestedListKeyboardControls

* Path: [views/generic/dropdown-controls/dropdown-nested-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/dropdown-controls/dropdown-nested-list.csx.coffee)
* 74 lines of code

**Used By:**
* [views/generic/lists/accordian-dropdown](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/accordian-dropdown.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Should open tree with right arrow
* Should close tree with left arrow
* Should select parent with enter
* Should not respond to open tree
* Should not respond to close tree
* Should select item with enter

**Render Method**

````
			return (
				<div onKeyDown={@handleKeyDown}>
					{@props.children}
				</div>
			)
````


### FetchMore

* Path: [views/generic/fetch-more](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/fetch-more.csx.coffee)
* 66 lines of code

**Used By:**
* [views/alert-history/table-row/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/alert-history/table-row/base.csx.coffee)
* [views/notification-center/section](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/notification-center/section.coffee)
* [views/notification-center/triggered-alerts/triggered-alert](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/notification-center/triggered-alerts/triggered-alert.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* sets loading to false
* sets type to button
* renders as a button
* does not render dots
* renders as text, rather than a button
* renders some dots
* shows a loading state
* doesn't renders the Show more text
* doesn't renders the itemsLeft
* renders the number of items left
* render the Show More text
* renders (0 left)
* does not render the show more text
* does not render the items left

**Render Method**

````
            itemsLeftIsNumber   = _.isNumber(@props.itemsLeft)
            noItemsLeft         = itemsLeftIsNumber and @props.itemsLeft <= 0
            componentClasses    = cx
                "fetch-more-base": true
                "has-none-left": noItemsLeft
                "is-type-button": @props.type is "button"
                "is-type-dots": @props.type is "dots"

            return (
                <div className={cx(componentClasses)}>
                    {if @props.type is "dots"
                        <span ref="dots" className="fetch-more-dots"></span>
                    }
                    <button onClick={@didClick} onKeyDown={@didKeyDown} disabled={@props.loading or noItemsLeft}>
                        {if @props.loading
                            <LoadingIndicator ref="loading" type="compact"/>
                        else
                            <span>
                                {if itemsLeftIsNumber is false or noItemsLeft is false
                                    <span ref="show-more">Show More</span>
                                }
                                {if itemsLeftIsNumber
                                    <small ref="items-count">{" (" + (if @props.itemsLeft < 0 then 0 else @props.itemsLeft) + " left)"}</small>
                                }
                            </span>
                        }
                    </button>
                </div>
            )
````


### FilterReact

* Path: [views/generic/filter-react](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/filter-react.csx.coffee)
* 23 lines of code

**Used By:**
* [views/services/detail/errors/react-base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/errors/react-base.csx.coffee)

**Unit Tests**


**Render Method**

````
            return (
                <div className="filter-react-base">
                    <span className="filter-react-summary icon-before-filter uiText">
                        Add filter
                    </span>
                    <div className="filter-react-menu">
                        {@props.children}
                        <button onClick={@props.onReset}>Clear Filters</button>
                    </div>
                </div>
            )
````


### Flag

* Path: [views/generic/flag](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/flag.csx.coffee)
* 35 lines of code

**Used By:**
* [views/generic/selected-items/locations](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/selected-items/locations.csx.coffee)
* [views/services/detail/errors/detail/overlay](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/errors/detail/overlay.csx.coffee)
* [views/services/detail/errors/table-row](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/errors/table-row.csx.coffee)
* [views/services/edit/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/edit/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Adds @2x with retina
* Leaves off @2x without retina

**Render Method**

````
			return (
				<img src={@getSource()} width={@getWidth()} alt="Country Flag" />
			)
````


### FormInfo

* Path: [views/generic/forms/form-info](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/form-info.csx.coffee)
* 26 lines of code

**Used By:**
* [views/generic/alert-configs/configs/config/action-settings/wait-repeat](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/action-settings/wait-repeat.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* has a full test suite

**Render Method**

````
            return (
                <div className="form-info-base">
                    {@props.children}
                </div>
            )
````


### GroupAlertConfigs

* Path: [views/generic/alert-configs/group](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/group.csx.coffee)
* 213 lines of code

**Used By:**
* [views/devices/group/alerting/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/group/alerting/base.coffee)
* [views/services/group/alerting/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/group/alerting/base.coffee)

**Unit Tests**


**Render Method**

````
			showBlankSlate 		= !@state.isLoading and !@props.groupAlerts?.length

			return (
				<AlertConfigsBase
					type={"group"}
					loading={@state.isLoading}
					showBlankSlate={showBlankSlate}
				>
					<div>
						<ActionsBar type="tab">
							{if showBlankSlate is false and @state.isLoading is false
								<div className="right">
									<button className="addAlert icon-before-add" onClick={@didAddGroupAlert}>
										<strong>Group</strong> alert
									</button>
								</div>
							}
						</ActionsBar>
					{if @state.isLoading
						<LoadingIndicator type="slate">
							Loading Alerts
						</LoadingIndicator>
					}
					{if showBlankSlate
						<div className="blankSlate bs--compact">
							<div className="message">
								<h3 className="title">Automatic alerts. Flexible configurations.</h3>
								<div className="support popover--top-left" data-popover="Help: Setting up alerts">
									<a href="https://support.serverdensity.com/hc/en-us/articles/201017717-Alert-config-options" data-external="" target="_blank" className="icon-before-question"></a>
								</div>
								<p>Setup group alerts and get notified by email, mobile sms, push notifications or third party integrations</p>
								<p>Group alerts will apply to every {@props.inventoryType.toLowerCase()} belonging to this group.</p>
								<button className="icon-before-add blankSlate-action" onClick={@didAddGroupAlert}>
									<strong>Group</strong> alert
								</button>
							</div>
						</div>
					}
					{if !@state.isLoading and !showBlankSlate and @props.groupAlerts.length
						<div className="alerts-wrapper">
							<p className="mass-action-info uiText">
								Ctrl (Windows), Cmd (Mac) or Shift click to perform actions on multiple alerts
							</p>
							<AlertConfigs
								sharedMassActionsIndex=0
								mediator={@props.mediator}

								alertConfigs={@props.groupAlerts}
								alertType={@props.inventoryType.toLowerCase() + "AlertsGroup"}
								topLevelMetrics={@topLevelMetrics.group}

								integrationsCollection={@integrations}
								usersCollection={@users}
								totalAvailableLocations={@props.totalAvailableLocations}
								canConfigureTagsRecipients={false}
							/>
						</div>
					}
					</div>
				</AlertConfigsBase>
			)
````


### InstanceActionsMenu

* Path: [views/generic/lists/instance-actions](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/instance-actions.csx.coffee)
* 101 lines of code

**Used By:**
* [views/dashboards/manager](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/dashboards/manager.coffee)
* [views/dashboards/widgets/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/dashboards/widgets/base.coffee)
* [views/generic/alert-configs/configs/config/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/base.csx.coffee)
* [views/generic/table-row](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/table-row.coffee)
* [views/preferences/users/list/user](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/list/user.csx.coffee)
* [views/tags/list/tag](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/list/tag.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* renders closed at first
* opens or closes when clicked
* closes when the user selects an action, informing the delegate
* passes its actions to the ListActionsMenu component
* is focussable

**Render Method**

````
			return (
				<DropdownControls
					getWrapperDOMNode={=> return @refs['cog-wrapper']}
					setOpenState={@setOpenState}
					toggleOpenState={@toggleOpenState}
					open={@state.open}
				>
					<div className="instance-actions" ref="wrapper">
						<div ref="cog-wrapper" tabIndex="0">
							<span ref="cog" aria-label="Open / close" role="button" onClick={@didClickCog} className="icon-before-cog"></span>
						</div>
						{ if @state.open
							<div className="list-actions-wrapper">
								<ListActionsMenu
									ref="list"
									actions={@props.actions}
									didSelectAction={@didSelectAction}
								/>
							</div>
						}
					</div>
				</DropdownControls>
			)
````


### InventoryAlertConfigs

* Path: [views/generic/alert-configs/inventory](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/inventory.csx.coffee)
* 235 lines of code

**Used By:**
* [views/devices/detail/alerting/alerts](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/alerting/alerts.csx.coffee)
* [views/services/detail/alerting/alerts](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/alerting/alerts.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* listens for requests for the recipients data
* listens to both collections
* fetches data from both collections
* renders a loading state
* renders a blank slate if there are no alert configs
* informs the Notification centre that it has rendered it's components
* renders the alerts
* allows tag recipients on inventory alerts if the user is not limited
* enables the add alert button
* shows a termincated blank slate
* disables the add alert button and explains why
* marks the alert as wasNew so child components can render differently
* removes the wasNew mark from other alert configs
* adds alerts when the blank slate buttons are pressed
* adds alerts when the blank slate buttons are pressed

**Render Method**

````
			showBlankSlate 				= !@props.isLoading and !@props.groupAlerts?.length and !@props.inventoryAlerts?.length
			userCanManageRelatedAlerts 	= ActiveUser.hasPermissionTo('manageRelatedAlerts', @props.inventoryModel.id)
			deviceIsTerminated 			= @props.inventoryModel.get('state') is "terminated"

			return (
				<AlertConfigsBase
					type={"inventory"}
					loading={@props.isLoading}
					showBlankSlate={showBlankSlate}
				>
					<div>
						<ActionsBar type="tab">
							{if showBlankSlate is false and @props.isLoading is false
								<div className="right">
									<div ref="add-alert-wrapper" className={cx('hide-popover': deviceIsTerminated is false)} data-popover="You can not add alerts to a terminated device">
										<button ref="add-alert-button" className="addAlert icon-before-add" onClick={@didAddInventoryAlert} disabled={deviceIsTerminated}>
											<strong>{@props.inventoryType}</strong> alert
										</button>
									</div>

									{if userCanManageRelatedAlerts
										<button className="addAlert icon-before-add" onClick={@didAddGroupAlert} disabled={deviceIsTerminated}>
											<strong>Group</strong> alert
										</button>
									}
								</div>
							}
						</ActionsBar>
					{if @props.isLoading
						<LoadingIndicator type="slate" ref="loading">
							Loading Alerts
						</LoadingIndicator>
					else if showBlankSlate
						<div ref="blank-slate" className="blankSlate bs--compact">
							<div className="message">
								{if deviceIsTerminated
									<span ref="terminated-blankSlate">
										<h3 className="title">Terminated device.</h3>
										<p>This device has been terminated. You can&#39;t add alerts to a terminated device!</p>
									</span>
								else
									<span ref="normal-blankSlate">
										<h3 className="title">Add Alerts. Get Notified of Problems.</h3>
										<div className="support popover--top-left" data-popover="Help: Setting up alerts">
											<a href="https://support.serverdensity.com/hc/en-us/articles/201017717-Alert-config-options" data-external="" target="_blank" className="icon-before-question"></a>
										</div>
										<p>Setup alerts and get notified by email, mobile sms, push notifications or third party integrations</p>
										<p>
											{@props.inventoryType} apply to this {@props.inventoryType} only.
											{if userCanManageRelatedAlerts
												<span>Group alerts will apply to every {@props.inventoryType} in that group.</span>
											}
										</p>
										<button ref="add-alert-button" className="icon-before-add blankSlate-action" onClick={@didAddInventoryAlert}>
											<strong>{@props.inventoryType}</strong>
											alert
										</button>
										{if userCanManageRelatedAlerts
											<button className="icon-before-add blankSlate-action" onClick={@didAddGroupAlert}>
												<strong>Group</strong>
												alert
											</button>
										}
									</span>
								}
							</div>
						</div>
					else
						<div className="alerts-wrapper">
						{if @props.inventoryAlerts.length
							<div>
								<h2>
									{@props.inventoryType + ' Alerts'}
								</h2>
								<p className="mass-action-info uiText">
									Ctrl (Windows), Cmd (Mac) or Shift click to perform actions on multiple alerts
								</p>
								<AlertConfigs
									ref="inventory-alerts"
									sharedMassActionsIndex=0
									mediator={@mediator}

									inventoryConditions={@inventoryConditions}
									inventoryModel={@props.inventoryModel}
									availableMetrics={@props.availableMetrics}
									alertConfigs={@props.inventoryAlerts}
									alertType={@props.inventoryType.toLowerCase() + "Alerts"}
									topLevelMetrics={@props.topLevelMetrics.inventory}
									totalAvailableLocations={@props.totalAvailableLocations}

									tagsCollection={@tags}
									integrationsCollection={@integrations}
									usersCollection={@users}
									canConfigureTagsRecipients={ActiveUser.isLimited() is false}
								/>
							</div>
						}
						{if userCanManageRelatedAlerts and @props.groupAlerts?.length
							<div className="related-alerts">
								<h2><a href={"/#{@props.inventoryType.toLowerCase()}s/groups/#{encodeURIComponent(@props.groupAlerts.subjectId)}"} title={"Manage alerts for the " + @props.groupAlerts.subjectId + " group"}>Group alerts</a></h2>
								<p style={padding: "0 20px"}>This { @props.inventoryType.toLowerCase() } is a member of <em>{@props.groupAlerts.subjectId}</em> and inherits the alerts below. Editing these alerts will change them for all { @props.inventoryType.toLowerCase() }s of the group.</p>
								<AlertConfigs
									ref="group-alerts"
									sharedMassActionsIndex=1
									mediator={@mediator}

									inventoryModel={@props.inventoryModel}
									availableMetrics={@props.availableMetrics}
									alertConfigs={@props.groupAlerts}
									alertType={@props.inventoryType.toLowerCase() + "AlertsGroup"}
									topLevelMetrics={@props.topLevelMetrics.group}
									totalAvailableLocations={@props.totalAvailableLocations}

									tagsCollection={@tags}
									integrationsCollection={@integrations}
									usersCollection={@users}
									canConfigureTagsRecipients={false}
								/>
							</div>
						}
						</div>
					}
					</div>
				</AlertConfigsBase>
			)
````


### InventoryLink

* Path: [views/generic/links/inventory-link](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/links/inventory-link.csx.coffee)
* 74 lines of code

**Used By:**
* [views/alert-history/table-row/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/alert-history/table-row/base.csx.coffee)
* [views/generic/tag](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/tag.csx.coffee)
* [views/tags/detail/tagged-items/lists/item/inventory](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/detail/tagged-items/lists/item/inventory.csx.coffee)
* [views/tags/list/tag](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/list/tag.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* responds to keyboard controls
* sets canNavigate to true
* sets showIcon to false
* does not show the type icon
* does not navigate
* shows 'deleted item' as it's text
* does not navigate
* shows 'deleted item' or 'deleted @props.type' as it's text
* shows 'deleted item' as it's text
* shows the type
* navigates
* does not navigate
* shows an icon

**Render Method**

````
            componentClasses = {
                "inventory-link-base": true
            }

            if _.isString(@props.name) and _.isString(@props.type)
                componentClasses["is-" + @props.type] = true
                componentClasses["can-navigate"] = @props.canNavigate and @props.notFound isnt true
                componentClasses["icon-before-" + @props.type] = @props.showIcon

            return (
                <span
                    aria-label={"View this " + @props.type}
                    onClick={@didClick}
                    onKeyDown={@didKeyDown}
                    tabIndex={0}
                    className={cx(componentClasses)}
                >
                    {if _.isString(@props.name) and @props.notFound isnt true
                        _str.titleize(@props.name)
                    else
                        <strong>{"Deleted " + (@props.type or "item")}</strong>
                    }
                </span>
            )
````


### IPVersion

* Path: [views/generic/ip-version](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/ip-version.csx.coffee)
* 33 lines of code

**Used By:**
* [views/services/detail/info-bar](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/info-bar.csx.coffee)
* [views/services/list/table-row](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/list/table-row.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Renders the correct version icon

**Render Method**

````
            classes = cx({
                'icon-before-ipv4' : @props.version is 4
                'icon-before-ipv6' : @props.version is 6
            })

            return (
                <span className={classes}></span>
            )
````


### ItemSelector

* Path: [views/generic/item-selector](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-selector.csx.coffee)
* 243 lines of code

**Used By:**
* [views/generic/item-tag-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-tag-list.csx.coffee)
* [views/services/edit/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/edit/base.csx.coffee)
* [views/tags/detail/tagged-items/lists/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/detail/tagged-items/lists/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* sets a default itemClassesGetter method
* sets a default itemNameGetter method
* cannot be opened
* shows prop placeholder
* displays search input on click
* updates state
* notifies delegate of search input
* displays list of selectable items
* uses the itemClassesGetter method to decorate items
* uses the itemNameGetter method to decorate items
* informs the user that it didn\
* Sets 0 by default
* Allows a prop to be used

**Render Method**

````
			componentClasses = cx(
				'item-selector': yes
				'is-modal': @props.isModal
				'is-disabled': @props.isDisabled
				'clearfix': yes
				'is-showing-input': @state.open
				'has-results': @props.availableItems.length > 0
			)

			resultsClasses = cx(
				'item-selector-results': yes
				'is-scrolling': @state.isScrolling
			)

			selectedResultsClasses = cx(
				'item-selector-results': yes
				'selected-results': yes
			)

			itemIndex = -1

			availableItems = []

			@props.availableItems.forEach (item) =>
				isSelected = _.find @state.selectedItems, (selectedItem) -> selectedItem.id is item.id

				if not isSelected
					itemIndex++

					classes = _.extend( @props.itemClassesGetter(item), {
						'item-selector-result': yes
						'is-focussed': itemIndex is @state.focussedItemIndex
					})

					availableItems.push (
						<li key={ item.id }
							ref={if itemIndex is @state.focussedItemIndex then 'focussed-item' else 'available-item'}
							data-value={ item.get(@props.valueField) }
							data-id={ item.id }
							data-index={itemIndex}
							className={ cx(classes) }
							onClick={ @didClickItem }>
								{ @props.itemNameGetter.apply(item) }
						</li>
					)

			if @props.showSuggestedItems is yes and @state.currentSearch is '' and _.isNumber(@props.totalSuggestedItems)
				availableItems = availableItems[0...@props.totalSuggestedItems]

			return (
				<DropdownControls
					getWrapperDOMNode={=> return @refs.component }
					setOpenState={@setOpenState}
					setLastKeyCodeForKeyDown={@setLastKeyCodeForKeyDown}
					toggleOpenState={@toggleOpenState}
					open={@state.open}
				>
						<div className={ componentClasses } ref="component" tabIndex={@props.tabindex}>
							<div className="item-selector-display icon-after-expand clearfix" title={ selectedItemNames?.replace(/,\s?/g, "\n") } onClick={ @toggleOpen } ref="itemDisplay">
									<span className="display-value" ref="displayValue">{ @props.placeholder }</span>
							</div>

							{ if @state.open is yes
								<DropdownListKeyboardControls
									didSelectItem={@didClickItem}
									getFocussedItemIndex={@getFocussedItemIndex}
									setFocussedItemIndex={@setFocussedItemIndex}
									getTotalItemsCount={@getTotalItemsCount}
									getFocussedItemDOMNode={=> return @refs['focussed-item']}
								>
									<div className="item-selector-input-container">
										<Search
											ref="searchInput"
											type="compact"
											didChange={@didEnterSearch}
											placeholder="Enter search..."
											autofocus={true}
											loading={@state.isLoading}
										/>

										{ if @state.currentSearch isnt '' or (@props.showSuggestedItems is yes and @props.availableItems.length > 0)
											<div className="item-selector-results-container" onScroll={ @didScrollResults } ref="resultsListContainer">
												<ul className={ resultsClasses }>
													{ if availableItems.length > 0
														availableItems
													}

													{ if @state.currentSearch isnt '' and availableItems.length is 0 and @state.isLoading is no
														<li className="no-results">No { if @state.selectedItems.length > 0 then "more" } matches</li>
													}
												</ul>
											</div>
										}
									</div>
								</DropdownListKeyboardControls>
							}
						</div>
				</DropdownControls>
			)
````


### ItemTagList

* Path: [views/generic/item-tag-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-tag-list.csx.coffee)
* 303 lines of code

**Used By:**
* [views/devices/detail/info-bar](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/info-bar.csx.coffee)
* [views/generic/item-tag-list-dropdown](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-tag-list-dropdown.csx.coffee)
* [views/preferences/users/list/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/list/base.csx.coffee)
* [views/preferences/users/list/user](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/list/user.csx.coffee)
* [views/services/detail/info-bar](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/info-bar.csx.coffee)

**Unit Tests**


**Render Method**

````
			# itemNameGetter is called with the item as 'this', so reassign here
			getDropdownName 	= @getDropdownName
			hasLoaded 			= @availableTags?.hasReset and (@props.tagIds.length is 0 or @tags?.hasReset or @tags.length > 0)
			componentClasses 	= cx
				'item-tag-list': yes
				'is-read-only': @props.readOnly
				'is-modal': @props.mode is 'modal'

			if hasLoaded
				tagsClasses = cx
					'tags': yes
					'clearfix': yes
					'is-empty': @props.tagIds.length is 0

				tagListPopoverClasses = cx
					'tag-list-container': yes
					'clearfix': yes

				@configureAvailableTags()

			removalMessage = if @state.itemPendingDeletion then @getFormattedItemMessageForTag(@state.itemPendingDeletion) else null

			return (
				<div className="item-tag-list-base">
					<div className={ tagListPopoverClasses } ref="tagListPopover">
						{if not hasLoaded
							<div className="loading-indicator-wrapper">
								<LoadingIndicator type="compact-slate">
									Loading Tags
								</LoadingIndicator>
							</div>
						else
							<div>
								{if @props.title
									<h2 className="tag-list-heading truncate">
										{ @props.title }
									</h2>
								}
								{if @state.itemMapping and @state.itemPendingDeletion
									<div className="guidance-message">
										<p>This will <span className="warning-text">remove {@tags.get(@state.itemPendingDeletion).get("name")}</span> from: {removalMessage}</p>
										<button onClick={@cancelTagRemoval}>Cancel</button>
										<button className="delete-button" onClick={@confirmTagRemoval}>Delete</button>
									</div>
								else if @state.itemMapping and @tags.length > 0 and @differentTagsPerItem()
									<p className="guidance-message">The selected {@props.itemType} have different tags. Mouse over each tag for info.</p>
								}
								{if @tags.length > 0
									<div className={ tagsClasses } ref="tags-outer">
										<OverflowScroll maxHeight={124} shouldPerformCheck={@tags.length > 5} >
											{@tags.map (tag) =>
												<Tag
													key={ tag.id }
													readOnly={ @props.readOnly }
													tag={ tag }
													onClickRemove={ @didClickRemoveTag }
													onHoverTooltip={if @state.itemMapping then @getTagTooltip(tag) else null}
												/>
											}
										</OverflowScroll>
									</div>
								}
								{ if not @props.readOnly
									<ItemSelector
										multi={ no }
										placeholder={ "Add tags..." }
										availableItems={ @availableTags }
										itemNameGetter={-> getDropdownName(@)}
										showSuggestedItems={ @availableTags.length <= 20 }
										onSearch={ @searchTags }
										onSelectionChanged={ @selectedTags }
									/>
								}
							</div>
						}
					</div>
				</div>
			)
````


### ItemTagListDropdown

* Path: [views/generic/item-tag-list-dropdown](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-tag-list-dropdown.csx.coffee)
* 95 lines of code

**Used By:**
* [views/devices/detail/info-bar](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/info-bar.csx.coffee)
* [views/preferences/users/list/user](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/list/user.csx.coffee)
* [views/services/detail/info-bar](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/info-bar.csx.coffee)

**Unit Tests**


**Render Method**

````
			return (
				<DropdownControls
					getWrapperDOMNode={=> return @refs.summary}
					setOpenState={@setOpenState}
					toggleOpenState={@toggleOpenState}
					open={@state.open}
				>
					<div className="item-tag-list-dropdown">
						<span className="tag-count icon-before-tags" role="button" ref="summary" tabIndex="0" onClick={@toggleOpenState}>
							{ @props.tagIds.length }
						</span>

						{if @state.open
							<div ref="dropdown" className="item-tag-list-dropdown-box">
								<div ref="arrow" className="item-tag-list-dropdown-arrow"></div>
								<ItemTagList {...@props}/>
							</div>
						}
					</div>
				</DropdownControls>
			)
````


### ListActionsMenu

* Path: [views/generic/lists/list-actions-menu](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/list-actions-menu.csx.coffee)
* 43 lines of code

**Used By:**
* [views/generic/lists/instance-actions](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/instance-actions.csx.coffee)
* [views/generic/lists/mass-actions-menu](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/mass-actions-menu.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* renders one item per action
* passes the action id, name, and class
* passes the delegate method for clicking on an action

**Render Method**

````
			return (
				<ul className="list-actions-menu">
				{for action in @props.actions
					<ListActionsMenuAction
						key={action.id}
						id={action.id}
						icon={action.icon}
						name={action.name}
						children={action.children}
						didSelect={@props.didSelectAction}
					/>
				}
				</ul>
			)
````


### LoadingIndicator

* Path: [views/generic/loading/loading-indicator](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/loading/loading-indicator.csx.coffee)
* 45 lines of code

**Used By:**
* [views/alert-history/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/alert-history/base.csx.coffee)
* [views/alert-history/table-row/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/alert-history/table-row/base.csx.coffee)
* [views/devices/detail/monitoring/graphs](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/monitoring/graphs.coffee)
* [views/devices/detail/overview/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/overview/base.coffee)
* [views/devices/detail/plugins/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/plugins/base.coffee)
* [views/devices/detail/snapshots/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/detail/snapshots/base.csx.coffee)
* [views/devices/edit/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/devices/edit/base.coffee)
* [views/generic/alert-configs/group](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/group.csx.coffee)
* [views/generic/alert-configs/inventory](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/inventory.csx.coffee)
* [views/generic/alert-configs/summary](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/summary.csx.coffee)
* [views/generic/date-selector](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/date-selector.csx.coffee)
* [views/generic/fetch-more](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/fetch-more.csx.coffee)
* [views/generic/forms/search](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/search.csx.coffee)
* [views/generic/graphs-v2/options](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/graphs-v2/options.coffee)
* [views/generic/item-tag-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-tag-list.csx.coffee)
* [views/generic/save-status](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/save-status.csx.coffee)
* [views/preferences/billing/package](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/package.csx.coffee)
* [views/preferences/billing/payment-details](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/payment-details.csx.coffee)
* [views/preferences/cloud/credentials/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/cloud/credentials/base.csx.coffee)
* [views/preferences/notifications/integrations/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/notifications/integrations/base.csx.coffee)
* [views/preferences/security/mfa/authenticator](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/security/mfa/authenticator.csx.coffee)
* [views/preferences/users/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/base.csx.coffee)
* [views/services/detail/errors/react-base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/errors/react-base.csx.coffee)
* [views/services/edit/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/edit/base.csx.coffee)
* [views/services/list/table-row](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/list/table-row.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* should render marks
* should render it's type
* should render children inside .content
* shouldn't render .content

**Render Method**

````
            classes = cx
                "loading-indicator": true
                "is-slate": @props.type is "slate"
                "is-compact": @props.type is "compact"
                "is-modal-confirm-button": @props.type is "modal-confirm-button"
                "is-compact-slate": @props.type is "compact-slate"

            return (
                <div className={classes} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Loading…">
                    {if @props.children?.length > 0
                        <div ref="content" className="content">
                            {@props.children}
                        </div>
                    }
                    <div ref="marks" className="marks">
                        <div className="mark mark-1" />
                        <div className="mark mark-2" />
                        <div className="mark mark-3" />
                    </div>
                </div>
            )
````


### LoadingPage

* Path: [views/generic/loading/loading-page](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/loading/loading-page.csx.coffee)
* 45 lines of code

**Used By:**
* [views/app](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/app.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* sets visible to false
* sets message to loading...
* listens for when to show the message
* listens for when to hide the message
* uses the displaying class
* uses the correct message
* hides itself uing the correct class

**Render Method**

````
			componentClasses =
				"loading-page": true
				"is-displaying": @state.visible is true
				"is-hidden": @state.visible isnt true

			return (
				<div className={cx(componentClasses)} ref="wrapper">
					<p ref="message" className="message">{@state.message}</p>
				</div>
			)
````


### MassActionsEnabledList

* Path: [views/generic/lists/mass-actions-enabled-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/mass-actions-enabled-list.csx.coffee)
* 369 lines of code

**Used By:**
* [views/generic/alert-configs/configs/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/base.csx.coffee)
* [views/preferences/users/list/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/list/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* can select a single model using an ID, unselecting previosuly selected models
* does not render the mass actions menu
* does not select any children
* listens for events from shared mass actions enabled lists
* listens for an events from unrelated UI elements (NC) telling it to select children
* stops listening to events from other mass actions enabled lists
* stops listening for events from unrelated UI elements (NC) telling it to select children
* renders one component per model in the collection
* passes componentProps to each component
* passes the model to each component
* passes the didClick method to the component
* informs the delegate
* informs other mass actions enabled lists
* renders the component for that action
* gets the props for the multi step component by passing the selectedSharedChildren
* passes the props to the component for that action
* informs any other shared mass actions enabled lists
* selects an unselected child component
* de-selects selected child componenets
* selects an unselected child component
* de-selects selected child componenets
* selects a single alert config
* selects components between this click and the last click
* passes the selected models to the delegate
* renders the mass actions menu using actions from the delegate
* cancels all selections if ctrl/cmd/shift are not pressed
* does not change it's selection if meta key is pressed
* does not change it's selection if ctrl key is pressed
* informs the other mass actions enabled list of the new selection
* selects all it's children if the last click & this click surrounds the list

**Render Method**

````
			children = _.map @props.collection.models, (model, i) =>

				props = _.extend {}, @props.getComponentProps(model), {
 					key: model.cid
 					model: model
 					didClick: @didClickChild
 					isSelected: _.isObject( _.findWhere( @state.selectedChildren, {cid: model.cid}) )
 				}

				return <@props.component {...props} />

			return (
				<DropdownControls
					getWrapperDOMNode={=> return @refs.wrapper }
					setOpenState={@setOpenState}
					afterDidClickDocument={@afterDidClickDocument}
					toggleOpenState={@toggleOpenState}
					open={@state.open}
				>
					<div className="mass-actions-enabled-list" ref="wrapper">
						{if @state.open
							<MassActionsMenu
								ref="menu"
								relativeParentOffset={@state.componentOffset}
								eventPageX={@state.menuPageX}
								eventPageY={@state.menuPageY}
								selectedItemsCount={@state.selectedSharedChildrenCount}
								actions={@state.menuItems}
								didSelectAction={@didSelectMassAction}
							>
								{if @state.multiStepComponent and @state.multiStepComponentProps
									<@state.multiStepComponent
										ref="multi-step"
										models={@state.selectedChildren}
										{...@state.multiStepComponentProps}
									/>
								else
									null
								}
							</MassActionsMenu>
						}
						<div ref="childComponents" className="mass-actions-children">
							{children}
						</div>
					</div>
				</DropdownControls>
			)
````


### MassActionsMenu

* Path: [views/generic/lists/mass-actions-menu](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/mass-actions-menu.csx.coffee)
* 90 lines of code

**Used By:**
* [views/generic/lists/mass-actions-enabled-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/mass-actions-enabled-list.csx.coffee)
* [views/generic/table-view](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/table-view.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* renders the number of items an action will apply to
* positions the menu right and below of the cursor
* passes the actions
* passes the did select action delegate method

**Render Method**

````
			return (
				<div className="mass-actions-menu displaying">
					<h4 className="itemCount" ref="count">
						<strong className="total">{@props.selectedItemsCount}</strong>
						<span>{(" item" + if @props.selectedItemsCount > 1 then "s" else "") + " "}</span>
						<span>selected</span>
					</h4>
					<div className="mass-actions-menu-content">
						{if @props.children
							@props.children
						else
							<ListActionsMenu
								ref="listActionsMenu"
								actions={@props.actions}
								didSelectAction={@props.didSelectAction}
							/>
						}
					</div>
				</div>
			)
````


### OverflowScroll

* Path: [views/generic/overflow-scroll](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/overflow-scroll.csx.coffee)
* 79 lines of code

**Used By:**
* [views/generic/item-tag-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-tag-list.csx.coffee)
* [views/generic/selected-items/locations](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/selected-items/locations.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Adds the appropriate styles / classes when over a certain height
* Removes the appropriate styles / classes when under a certain height

**Render Method**

````
            baseClasses = cx({
                "overflow-scroll-base": yes
                "is-scrolling": @state.isScrolling
                "has-scrolled-down": @state.hasScrolledDown
                "dark-theme": @props.theme is "dark"
            })

            outerStyles = {
                maxHeight: if @state.isScrolling then (@props.maxHeight + 'px') else 'none'
            }

            return (
                <div className={baseClasses}>
                    <div className="overflow-scroll-outer" onScroll={@onOuterScroll} style={outerStyles} ref="outer">
                        <div className="overflow-scroll-inner clearfix" ref="inner">
                            {@props.children}
                        </div>
                    </div>
                </div>
            )
````


### paginator

* Path: [views/generic/lists/paginator](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/paginator.csx.coffee)
* 108 lines of code

**Used By:**
* [views/alert-history/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/alert-history/base.csx.coffee)
* [views/preferences/users/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/base.csx.coffee)
* [views/services/detail/errors/react-base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/detail/errors/react-base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* displays previous page button
* displays next page button
* displays current page input
* displays the total pages
* can jump to last page
* disables previous page button
* enables next page button
* can move to next page
* can move directly to last page
* disables next page button
* enables previous page button
* can move to previous page

**Render Method**

````
			previousButtonDisabled 	= _.contains [1, null], @props.currentPage
			nextButtonDisabled 		= _.contains [null, @props.totalPages], @props.currentPage

			return (
				<div className="paginator">
					<button
						ref="previousPageButton"
						type="button"
						disabled={ previousButtonDisabled }
						className="previous-page icon-before-arrow-left noText"
						title="Previous page"
						onClick={ @viewPreviousPage }>
					</button>

					<input
						ref="currentPageInput"
						className="current-page"
						type="text"
						value={ @props.currentPage }
						onChange={ @onEnterPageNumber }
					/>

					<span className="uiText">of</span>

					<button
						ref="totalPages"
						type="button"
						tabIndex="0"
						className="total-pages"
						disabled={ @props.totalPages is 1 }
						onClick={ @viewLastPage }
						title={ "Jump to page " + @props.totalPages }
					>
							{ @props.totalPages }
					</button>

					<button
						ref="nextPageButton"
						type="button"
						disabled={ nextButtonDisabled }
						className="next-page icon-before-arrow-right noText"
						title="Next page"
						onClick={ @viewNextPage }>
					</button>
				</div>
			)
````


### PasswordInput

* Path: [views/generic/inputs/password](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/inputs/password.csx.coffee)
* 25 lines of code

**Used By:**
* [views/preferences/cloud/credentials/provider-forms/amazon](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/cloud/credentials/provider-forms/amazon.csx.coffee)
* [views/preferences/cloud/credentials/provider-forms/rackspace](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/cloud/credentials/provider-forms/rackspace.csx.coffee)
* [views/preferences/security/password](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/security/password.csx.coffee)
* [views/preferences/users/edit/form](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/edit/form.csx.coffee)

**Unit Tests**


**Render Method**

````
			return (
				<TextField {...@props} ref="input" type="password" />
			)
````


### PersistentSearch

* Path: [views/generic/forms/persistent-search](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/persistent-search.csx.coffee)
* 61 lines of code

**Used By:**
* [views/preferences/users/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* sets @props.searchTerm
* informs the delegate of the searchTerm
* passes it's own props
* informs the delegate
* updates the search url param
* removes the search url param
* removes the search url param

**Render Method**

````
            return (
                <div className={@props.className}>
                    <Search
                        ref="search"
                        type={@props.type}
                        isActive={@props.isActive}
                        isLoading={@props.isLoading}
                        placeholder={@props.placeholder}
                        initialSearchTerm={@props.searchTerm}
                        autofocus={@props.autofocus}

                        didChange={@didChange}
                    />
                </div>
            )
````


### PhoneInput

* Path: [views/generic/forms/phone-input](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/phone-input.csx.coffee)
* 213 lines of code

**Used By:**
* [views/onboarding/steps/parts/add-web-check/add-phone](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/onboarding/steps/parts/add-web-check/add-phone.csx.coffee)
* [views/preferences/billing/invoice-contact](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/invoice-contact.csx.coffee)
* [views/preferences/billing/payment-details](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/payment-details.csx.coffee)
* [views/preferences/profile/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/profile/base.csx.coffee)
* [views/preferences/users/edit/form](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/edit/form.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* displays input field
* displays default placeholder
* displays given placeholder on number input
* creates correct number of country options
* sets country options correctly
* keeps track of selected country
* keeps track of phone number
* displays countries dropdown
* does not display a country dropdown
* , ->
* sets the state to match the initial state
* clears any feedbackHandler messages

**Render Method**

````
			componentClasses = cx(
				'phone-input': yes
				'clearfix': yes
				'is-valid': @state.isValid
				'is-invalid': @state.phoneNumber?.length > 0 and not @state.isValid
				'has-country-code': @state.showCountrySelect
			)

			countries = @props.countries.map (country) =>
				description = if @state.isViewingCountries
					country.name + ' (' + country.phoneCode + ')'
				else
					country.phoneCode

				return <option
							key={ country.code}
							value={ country.code }
							data-dialing-code={ country.phoneCode }>
								{ description }
						</option>

			return (
				<div className={ componentClasses }>

					{if @state.showCountrySelect
						<select ref="countryCode" name="countryCallingCode" className="phone-input-country" value={ @state.country } onChange={ @onChangeDialingCode } onFocus={ @openedCountriesDropdown } onBlur={ @closedCountriesDropdown }>
							<optgroup label="International calling code">
								{ countries }
							</optgroup>
						</select>
					}

					<TextField
						ref="phoneInput"
						withButton={ @props.withButton }
						buttonTitle={ @props.buttonTitle }
						placeholder={ @props.placeholder }
						value={ @state.rawNumber }
						onChange={ @onChangeNumber }
						onSubmit={ @onSubmit }
					/>
				</div>
			)
````


### SaveStatus

* Path: [views/generic/save-status](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/save-status.csx.coffee)
* 57 lines of code

**Used By:**
* [views/generic/alert-configs/configs/config/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/base.csx.coffee)
* [views/preferences/billing/invoice-contact](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/invoice-contact.csx.coffee)
* [views/preferences/billing/package](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/package.csx.coffee)
* [views/preferences/billing/payment-details](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/payment-details.csx.coffee)
* [views/preferences/cloud/credentials/new-credential-form](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/cloud/credentials/new-credential-form.csx.coffee)
* [views/preferences/notifications/integrations/new-integration-form](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/notifications/integrations/new-integration-form.csx.coffee)
* [views/preferences/profile/contact/method-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/profile/contact/method-list.csx.coffee)
* [views/preferences/profile/rookie-tooltips](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/profile/rookie-tooltips.csx.coffee)
* [views/preferences/profile/timezone](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/profile/timezone.csx.coffee)
* [views/preferences/security/api-tokens](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/security/api-tokens.csx.coffee)
* [views/preferences/security/password](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/security/password.csx.coffee)
* [views/preferences/users/list/user](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/list/user.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Should have the correct popover message
* Should render a loading indicator
* Should have the correct popover message
* Should render an element with the relevant classes
* Should have the correct popover message
* Should render an element with the relevant classes

**Render Method**

````
            classes = cx({
                'is-saving': @props.isSaving
                'just-saved': @props.justSaved
                'just-errored': @props.justErrored
                'save-status': yes
            })

            popoverMessage = if @props.isSaving then 'Saving...' else if @props.justSaved then 'Saved!' else 'Oops!'

            return (
                <div>
                    {if @props.isSaving or @props.justSaved or @props.justErrored
                        <div className={classes}>
                            <span ref="save-status" className="save-status-container" data-popover={popoverMessage}>
                                {if @props.isSaving
                                    <LoadingIndicator type="compact" />
                                else if @props.justSaved
                                    <div ref="just-saved" className="save-success icon-before-success"></div>
                                else
                                    <div ref="just-errored" className="save-error icon-before-cancel"></div>
                                }
                            </span>
                        </div>
                    else if @props.children
                        @props.children
                    }
                </div>
            )
````


### SaveStatusFeedback

* Path: [views/generic/save-status-feedback](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/save-status-feedback.csx.coffee)
* 58 lines of code

**Used By:**
* [views/preferences/billing/invoice-contact](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/invoice-contact.csx.coffee)
* [views/preferences/billing/package](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/package.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Should not show anything
* Should render an auto expire component
* Should hide the message, and unmount the AutoExpire component
* Should assign an .error class to the message container

**Render Method**

````
            messageClasses = cx({
                "save-status-feedback-message": yes
                "error": @props.type is 'error'
            })

            return (
                <div className="save-status-feedback">
                    {if @state.isShowingMessage
                        <AutoExpire delay={@props.delay} onDelayEnd={@handleDelayEnd}>
                            <p className={messageClasses}>{@props.children}</p>
                        </AutoExpire>
                    }
                </div>
            )
````


### Search

* Path: [views/generic/forms/search](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/search.csx.coffee)
* 116 lines of code

**Used By:**
* [views/generic/forms/persistent-search](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/persistent-search.csx.coffee)
* [views/generic/item-selector](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-selector.csx.coffee)
* [views/generic/lists/accordian-dropdown](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/lists/accordian-dropdown.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* gets default props
* gets initial state
* uses the type class to control styling
* shows a search icon
* renders a search input
* uses the @props.placeholder for the placeholder
* users @props.initialSearch for the value
* informs the delegate
* updates the state
* shows a loading indicator
* does not show the cancel icon
* shows a cancel button
* responds to a click
* responds to enter
* responds to space

**Render Method**

````
			componentClasses = cx
				'search-component-base': yes
				'clearfix': yes
				'is-searching': @props.isActive
				'is-compact': @props.type is "compact"
				'is-large': @props.type is "large"

			return (
				<div role="search" className={ componentClasses }>
					<div className="input-icons-wrapper">
						<span ref="search-icon" className="search-icon icon-before-search"></span>
						<input
							className="search-input"
							type="text"
							ref="search-input"
							value={ @state.currentSearchTerm }
							onChange={ @didChange }
							placeholder={ @props.placeholder }
						/>
						{if @props.isLoading
							<div ref="loading" className="loading-indicator-wrapper">
								<LoadingIndicator type="compact"/>
							</div>
						else if @state.currentSearchTerm?.length > 0
							<span
								ref="cancel"
								tabIndex={0}
								className="cancel-search"
								onClick={@didClickCancel}
								onKeyDown={@didKeyDownCancel}
								children="x"
							/>
						}

						{if @props.showSubmitButton
							<button ref="submit-button" type="submit" className="search-button">Search</button>
						}
					</div>
				</div>
			)
````


### SelectedItemsLocations

* Path: [views/generic/selected-items/locations](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/selected-items/locations.csx.coffee)
* 78 lines of code

**Used By:**
* [views/services/edit/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/edit/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Renders each location
* Should only render provider labels when more than one location shares the country code
* Should order locations alphabetically by name
* Should respond to clicks
* Should respond to keyboard controls

**Render Method**

````
			classes = cx({
				"selected-locations": yes
				"has-results": @props.locations.length > 0
			})
			sortedLocations = @props.locations.slice().sort (a, b) ->
				if a.name <= b.name then return -1 else return 1
			return (
				<div className={classes}>
					<OverflowScroll maxHeight="60" theme="dark">
						<ul className="clearfix">
						{sortedLocations.map (location, index) =>
							return (
								<li className="selected-locations-location" key={location.id}>
									<Flag countryCode={location.countryCode} />
									<span className="name">{location.name}</span>
									{if @hasMoreThanOneLocationInCountryCode(location.countryCode)
										<ServiceProvider name={location.provider} />
									}
									<span ref={"removeButton" + index} tabIndex={@props.tabIndex} onKeyDown={@didKeyDownRemove.bind(@, location.id, index)} onClick={@didClickRemove.bind(@, location.id)} className="remove-location icon-before-delete"></span>
								</li>
							)
						}
						</ul>
					</OverflowScroll>
				</div>
			)
````


### ServiceMonitorErrorsLink

* Path: [views/generic/links/service-monitor-errors-link](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/links/service-monitor-errors-link.csx.coffee)
* 48 lines of code

**Used By:**
* [views/generic/alert-configs/summary](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/summary.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* renders an icon
* does not include the ?tid param
* uses @props.triggeredAlertId for the ?tid param
* does not include the date range params
* has the correct date range params

**Render Method**

````
            href = "/services/" + @props.serviceId + "/errors"

            if @props.triggeredAlertId
                href += "?tid=" + @props.triggeredAlertId

            if @props.openDateTime

                if @props.configId
                    href += "&"

                else
                    href += "?"

                href += "period=30minutes"
                href += "&position=around"
                href += "&date=" + encodeURI(@props.openDateTime)

            return (
                <a aria-label="Info icon" className="service-monitor-errors-link-base" href={href}>
                    <span className="icon-before-info"></span>
                </a>
            )
````


### ServiceProvider

* Path: [views/generic/service-provider](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/service-provider.csx.coffee)
* 27 lines of code

**Used By:**
* [views/generic/selected-items/locations](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/selected-items/locations.csx.coffee)
* [views/services/edit/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/edit/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* Renders correctly

**Render Method**

````
            return (
                <span className={"service-provider-base " + @props.name}>
                    {@props.name}
                </span>
            )
````


### TabbedViews

* Path: [views/generic/tabbed-views](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/tabbed-views.csx.coffee)
* 105 lines of code

**Used By:**
* [views/preferences/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/base.csx.coffee)
* [views/tags/detail/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/detail/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* sets the active tab
* updates the url
* informs the delegate
* sets the active tab as specificed by @props.initialTab
* does not updates the url
* does not inform the delegate
* renders one tab link for each child
* highlights the active tab
* renders only the active content
* updates the url
* informs the delegate

**Render Method**

````
			activeContentView = null
			tabs 			  = []

			React.Children.forEach @props.children, (child) =>
				if child.props.id is @state.activeTabId
					activeContentView = child

				tabClasses = cx(
					'tab': yes
					'selected': child.props.id is @state.activeTabId
				)

				tabs.push <li key={ child.props.id } tabIndex="0" role="button" data-id={ child.props.id } onClick={ @clickedTab } onKeyDown={@keyDownTab} className={ tabClasses }>{ child.props.title }</li>

			tabClasses = cx
				"tabs": 			yes
				"is-horizontal": 	@props.type is "horizontal"
				"is-vertical": 		@props.type is "vertical"

			containerClasses = cx
				"container": 		yes
				"tabbed": 			yes
				"is-horizontal": 	@props.type is "horizontal"
				"is-vertical": 		@props.type is "vertical"

			return (
				<div className="tabbed-views">
					<ul ref="tabs" id="detailSectionTabs" className={tabClasses} >
						{ tabs }
					</ul>
					<div ref="content" id="detailSectionContent" className={containerClasses}>
						{ activeContentView }
					</div>
				</div>
			)
````


### Tag

* Path: [views/generic/tag](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/tag.csx.coffee)
* 59 lines of code

**Used By:**
* [views/generic/item-tag-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/item-tag-list.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* renders an inventory link
* renders the tag color
* tells the inventroy link it can navigate
* renders a remove button
* informs the delegate
* tells the inventroy link not to navigate
* does not render a remove link

**Render Method**

````
			tagName = @props.tag.get('name') or '...'

			return (
				<div {...@props} className="tag tag--small" data-popover={@props.onHoverTooltip}>
					{if @props.readOnly is false
						<span tabIndex={0} ref="remove-tag" className="remove-tag icon-before-delete" title="Remove this tag" onClick={ @didClickRemove } onKeyDown={@didKeyDownRemove} ></span>
					}
					<Inventorylink
						ref="tag-link"
						_id={@props.tag.id}
						name={@props.tag.get('name') or '...' }
						type="tag"
						showIcon={false}
						canNavigate={@props.readOnly is false}
					/>
					<div ref="color" className="tag-color-indicator" style={ background: @props.tag.get('color') }></div>
				</div>
			)
````


### TextField

* Path: [views/generic/inputs/textfield](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/inputs/textfield.csx.coffee)
* 108 lines of code

**Used By:**
* [views/generic/forms/phone-input](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/phone-input.csx.coffee)
* [views/generic/inputs/credit-card-input](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/inputs/credit-card-input.csx.coffee)
* [views/generic/inputs/password](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/inputs/password.csx.coffee)
* [views/preferences/billing/invoice-contact](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/invoice-contact.csx.coffee)
* [views/preferences/billing/payment-details](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/billing/payment-details.csx.coffee)
* [views/preferences/cloud/credentials/provider-forms/amazon](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/cloud/credentials/provider-forms/amazon.csx.coffee)
* [views/preferences/cloud/credentials/provider-forms/google](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/cloud/credentials/provider-forms/google.csx.coffee)
* [views/preferences/cloud/credentials/provider-forms/rackspace](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/cloud/credentials/provider-forms/rackspace.csx.coffee)
* [views/preferences/notifications/integrations/integration-type-forms/hipchat](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/notifications/integrations/integration-type-forms/hipchat.csx.coffee)
* [views/preferences/notifications/integrations/integration-type-forms/pagerduty](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/notifications/integrations/integration-type-forms/pagerduty.csx.coffee)
* [views/preferences/notifications/integrations/integration-type-forms/slack](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/notifications/integrations/integration-type-forms/slack.csx.coffee)
* [views/preferences/notifications/integrations/integration-type-forms/webhook](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/notifications/integrations/integration-type-forms/webhook.csx.coffee)
* [views/preferences/notifications/integrations/new-integration-form](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/notifications/integrations/new-integration-form.csx.coffee)
* [views/preferences/profile/contact/method-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/profile/contact/method-list.csx.coffee)
* [views/preferences/security/api-tokens](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/security/api-tokens.csx.coffee)
* [views/preferences/security/mfa/authenticator](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/security/mfa/authenticator.csx.coffee)
* [views/preferences/security/mfa/mfa](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/security/mfa/mfa.csx.coffee)
* [views/preferences/users/edit/form](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/edit/form.csx.coffee)

**Unit Tests**


**Render Method**

````
			textFieldClasses = cx('textfield', @props.className)

			inputClasses = cx
				'textfield-input': yes
				'with-button': @props.withButton

			placeholder = @props.placeholder or ''

			return (
				<div className={ textFieldClasses }>
					<input ref="input" name={ @props.name } type={ @props.type } placeholder={ placeholder } className={ inputClasses } value={ @state.currentValue } onChange={ @onChangeInput } onKeyDown={ @onKeyDownInput } />

					{ if @props.withButton
						<button
							className="textfield-button"
							onClick={ @onClickActionButton }
							disabled={ @props.loading }
						>
							{ if @props.buttonContent then @props.buttonContent else @props.buttonTitle }
						</button>
					}
				</div>
			)
````


### toggle

* Path: [views/generic/forms/toggle](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/toggle.csx.coffee)
* 104 lines of code

**Used By:**
* [views/dashboards/dashboard/privacy-setting](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/dashboards/dashboard/privacy-setting.csx.coffee)
* [views/generic/alert-configs/configs/config/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/base.csx.coffee)
* [views/onboarding/steps/parts/add-user/simple-add-user](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/onboarding/steps/parts/add-user/simple-add-user.csx.coffee)
* [views/preferences/notifications/integrations/integration-type-forms/hipchat](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/notifications/integrations/integration-type-forms/hipchat.csx.coffee)
* [views/preferences/users/edit/form](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/edit/form.csx.coffee)
* [views/preferences/users/list/mass-permissions](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/list/mass-permissions.csx.coffee)
* [views/preferences/users/list/user](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/users/list/user.csx.coffee)
* [views/services/edit/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/services/edit/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* can be focussed
* toggles via the enter key
* Sets 0 by default
* Allows a prop to be used
* toggles via a click
* informs the delegate when toggling
* optionally displays on and off text
* displays an icon if no on and off text is provided
* checks the toggle on or off
* adds additional classes
* gives the checkbox a name
* updates @state.isChecked when it recieves new props that are differnet

**Render Method**

````
			componentClasses = {}

			for className in @props.classesString.split(' ')
				componentClasses[className] = true

			if @props.onText and @props.offText
				componentClasses['has-on-off-text'] = true

			componentClasses.toggle 		= true
			componentClasses.clearfix 		= true



			return (
				<div className={cx(componentClasses)} tabIndex={@props.tabindex} onKeyDown={@didKeyDownWrapper}>
					<input
						type="checkbox"
						ref="checkbox"
						tabIndex="-1"
						id={@props.name}
						name={@props.name}
						checked={@state.isChecked}
						onChange={@didChange}
					/>
					<label ref="label" htmlFor={@props.name}>
						<div className="controls">
							<span className="handle">
							{if @props.onText
								<span className="on" ref="onText">{@props.onText}</span>
							}
							{if @props.offText
								<span className="off" ref="offText">{@props.offText}</span>
							}
							</span>
						</div>
					</label>
				</div>
			)
````


### UserLink

* Path: [views/generic/links/user-link](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/links/user-link.csx.coffee)
* 60 lines of code

**Used By:**
* [views/generic/alert-configs/configs/config/action-settings/delivery-options/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/action-settings/delivery-options/base.csx.coffee)
* [views/tags/detail/tagged-items/lists/item/user](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/detail/tagged-items/lists/item/user.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* renders it's children
* should be focusable
* does not respond to a click
* does not respond to the enter key
* does not respond to hover
* does not add a can-navigate class
* adds a can-navigate class
* , ->
* responds to a click
* responds to the enter key (only)
* adds a show-hover class
* doesn't add a show-hover class
* responds to a click
* responds to the enter key (only)
* adds a can-navigate class
* responds to a click
* responds to the enter key (only)
* adds a show-hover class
* doesn't add a show-hover class

**Render Method**

````
            classes = cx({
                "user-link-base": true
                "can-navigate": @canNavigate()
                "show-hover": @canNavigate() and @props.shouldShowHover
            })

            return (
                <span
                    aria-label="View this user"
                    ref="link"
                    tabIndex="0"
                    onClick={@didClick}
                    onKeyDown={@didKeyDown}
                    className={classes}
                >
                    {@props.children}
                </span>
            )
````


### ValidatableInput

* Path: [views/generic/validatable-input](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/validatable-input.csx.coffee)
* 57 lines of code

**Used By:**
* [views/onboarding/steps/parts/add-user/simple-add-user](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/onboarding/steps/parts/add-user/simple-add-user.csx.coffee)
* [views/onboarding/steps/parts/add-web-check/add-service](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/onboarding/steps/parts/add-web-check/add-service.csx.coffee)
* [views/onboarding/steps/parts/install-agent/add-device](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/onboarding/steps/parts/install-agent/add-device.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* will show an input field
* can notify of value changes
* will set classes from props
* will set input type from props
* will set input id and name from props
* will set input placeholder from props
* will set input default value from props
* will set required from props
* will set autoFocus from props
* can show an error
* can hide error label

**Render Method**

````
            return (
                <div className={ "validatable-input " + @props.classes }>

                    <input
                        ref='field'
                        className={if @props.error then 'error' else null}
                        id={@props.id}
                        name={@props.id}
                        type={@props.type}
                        placeholder={@props.placeholder}
                        autoFocus={@props.autoFocus}
                        defaultValue={@props.defaultValue}
                        required={@props.required}
                        onChange={@props.didChangeValue} />

                    { if @props.error and @props.showErrorLabel
                        <label className="error" key={"error-" + @props.id}>{@props.error.description}</label>
                    }
                </div>
            )
````


### XButton

* Path: [views/generic/forms/x-button](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/forms/x-button.csx.coffee)
* 55 lines of code

**Used By:**
* [views/generic/alert-configs/configs/config/action-settings/actions](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/alert-configs/configs/config/action-settings/actions.csx.coffee)
* [views/preferences/cloud/credentials/credential-item](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/cloud/credentials/credential-item.csx.coffee)
* [views/preferences/notifications/integrations/integration-item](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/notifications/integrations/integration-item.csx.coffee)
* [views/preferences/profile/contact/method-list](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/profile/contact/method-list.csx.coffee)
* [views/preferences/security/api-tokens](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/security/api-tokens.csx.coffee)
* [views/preferences/security/mfa/mfa](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/preferences/security/mfa/mfa.csx.coffee)
* [views/tags/detail/tagged-items/lists/item/base](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/tags/detail/tagged-items/lists/item/base.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* renders a button styled like [X]
* informs the delegate when clicked
* renders the children or 'remove'

**Render Method**

````

			# x-button icon-before-delete noText delete

			classes = cx([
				"btn"
				"btn--destructive"
				"remove"
				"icon-before-delete"
				"noText"
				"x-button"
				"x-button--is-" + @props.type
			])

			return (
				<button
					{...@props}
					className={classes}
					onClick={@props.didClick}
					type="button"
					aria-label="Remove"
				>
					{@props.children or "remove"}
				</button>
			)
````
