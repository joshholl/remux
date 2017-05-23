import {test} from 'tap'
import React from 'react'
import { shallow } from 'enzyme'
import { default as TestObject } from '../../src/components/PresentationRoot'

test('basic render', t => {
	const item = shallow(<TestObject />)
	t.plan(1)
	t.ok(item.find('h1').first().children().first().equals('Howdy')); 
});


