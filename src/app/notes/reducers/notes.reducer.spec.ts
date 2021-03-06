import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { notes } from './notes.reducer';

describe('Reducer: Notes', () => {
    let initialState = 
    [
        {
        "colour": "green",
        "text": "First Note from DB",
        "id": 1,
        "left": 200,
        "top": 100
        },
        {
        "colour": "green",
        "text": "Second Note from DB",
        "id": 2,
        "left": 200,
        "top": 100
        },
        {
        "colour": "green",
        "text": "Third Note from DB",
        "id": 3,
        "left": 200,
        "top": 100
        }
    ];
        
    it('`should update the item`', () => {
        let payload = {id: 2, text: "new note 2"};
        let result = [ 
            initialState[0], 
            {
                "colour": "green",
                "text": "new note 2",
                "id": 2,
                "left": 200,
                "top": 100,
                "dirty":true
            },
            initialState[2] 
            ];
            
        let stateItems = notes(initialState, {type: 'UPDATE_NOTE_TEXT', payload: payload});

        expect(stateItems).toEqual(result);
    });  
});


