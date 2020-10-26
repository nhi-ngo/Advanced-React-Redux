import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapper

beforeEach(() => {
  wrapper = mount(<CommentBox />)
})

afterEach(() => {
  wrapper.unmount()
})

it('has a text area and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})

it('has a text area that users can type in', () => {
  wrapper.find('textarea').simulate('change', { target: { value: 'new comment' } })
  wrapper.setProps({ value: 'new comment' })
  expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
})

it('when form is submitted, text area gets emptied', () => {
  wrapper.find('form').simulate('change', { target: { value: 'new comment' } })
  wrapper.setProps({ value: 'new comment' })
  wrapper.find('form').simulate('submit')
  wrapper.setProps({ value: '' })
  expect(wrapper.find('textarea').prop('value')).toEqual('')
})
