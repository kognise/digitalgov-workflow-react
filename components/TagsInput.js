import { Component } from 'react'
import TagsInput from 'react-tagsinput'
import Autosuggest from 'react-autosuggest'
import slugify from '../lib/slugify'

export default class extends Component {
  state = {
    tags: [],
    slugs: []
  }

  render() {
    return <div className='usa-tagsinput-outer'>
      <TagsInput renderInput={this.renderInput.bind(this)} value={this.state.tags} onChange={this.handleChange.bind(this)} inputProps={{
        className: 'usa-tagsinput-input',
        placeholder: null
      }} tagProps={{
        className: 'usa-tagsinput-tag', 
        classNameRemove: 'usa-tagsinput-remove'
      }} className='usa-tagsinput' focusedClassName='usa-tagsinput-focused' onlyUnique />
    </div>
  }

  renderInput({ addTag, ...props }) {
    const handleChange = (event, { method }) => {
      if (method === 'enter') {
        event.preventDefault()
      } else {
        props.onChange(event)
      }
    }

    const inputValue = (props.value && props.value.trim().toLowerCase()) || ''

    const suggestions = this.props.sans.filter((san) => {
      return san.name.toLowerCase().includes(inputValue)
    })

    return <Autosuggest ref={(autosuggest) => {
      if (autosuggest !== null) {
        props.ref(autosuggest.input)
      }
    }}
      suggestions={suggestions}
      shouldRenderSuggestions={(value) => value && value.trim().length > 0}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
      inputProps={{ ...props, onChange: handleChange, id: this.props.idOrName }}
      onSuggestionSelected={(event, { suggestion }) => {
        addTag(suggestion.name)
      }}
      onSuggestionsClearRequested={() => {}}
      onSuggestionsFetchRequested={() => {}} />
  }

  handleChange(tags) {
    const slugs = tags.map((tag) => {
      const foundInSans = this.props.sans.find((san) => san.name === tag)
      if (foundInSans) {
        return foundInSans.slug
      } else {
        return slugify(tag)
      }
    })
    if (this.props.handleChange) this.props.handleChange(slugs)
    this.setState({ tags, slugs })
  }
}