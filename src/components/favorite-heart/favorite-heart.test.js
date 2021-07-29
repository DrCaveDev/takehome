import { create, act } from 'react-test-renderer';
import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteHeart from './favorite-heart';

// Ensure that tests are working with clean local storage
beforeAll(() => {
    localStorage.clear();
});

describe('FavoriteHeart tests:', () => {
    test('SVG changes when clicked', () => {
        // Get component
        let component;
        act(() => {
            component = create(
                <FavoriteHeart id="test1" />
            );
        });

        // Take a snapshot of the component (unfavorited)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        let svgSrc = tree.props.src;

        // Click on the icon
        act(() => {
            tree.props.onClick();
        });

        // Take another snapshot (favorited)
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // Ensure that the src has changed
        let newSrc = tree.props.src;
        expect(svgSrc === newSrc).toBeFalsy();

        // Click icon again
        act(() => {
            tree.props.onClick();
        });

        // Take another snapshot (unfavorited)
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // Ensure src has changed again
        expect(newSrc === tree.props.src).toBeFalsy();
        //Ensure current src matches original
        expect(svgSrc === tree.props.src).toBeTruthy();
    });

    test('SVG saves state', () => {
        // Get component
        let component;
        act(() => {
            component = create(
                <FavoriteHeart id="test2" />
            );
        });

        let tree = component.toJSON();

        // Click on icon
        act(() => {
            tree.props.onClick();
        });

        // Get the current svg src
        tree = component.toJSON();
        let svgSrc = tree.props.src;

        // Remove the component
        component.unmount();

        // Recreate the component
        component = renderer.create(
            <FavoriteHeart id="test2" />
        );

        // Get new svg src
        tree = component.toJSON();
        let newSrc = tree.props.src;

        // Ensure that sources match (pulled from local storage)
        expect(svgSrc === newSrc).toBeTruthy();
    })
})