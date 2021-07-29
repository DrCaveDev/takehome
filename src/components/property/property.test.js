import { create, act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import React from 'react';
const { default: Property } = require("./property");

// Properties for test use
// Some additional properties bathsTotal
// formattedListPrice and formattedListDate
// added for ease of testing
const TEST_PROPERTIES = [
    {
        bedrooms: 5,
        bathsFull: 1,
        bathsHalf: 3,
        bathsTotal: 2.5,
        area: 2400,
        listPrice: 650000,
        formattedListPrice: '\\$650,000',
        address: {
            full: '21 Lonesome Drive',
            city: 'Irvington',
            state: 'CA'
        },
        listDate: '1/3/2021',
        formattedListDate: '1\\/3\\/2021'
    },
    {
        bedrooms: 2,
        bathsFull: 2,
        bathsHalf: 1,
        bathsTotal: 2.5,
        area: 1500,
        listPrice: 3750000,
        formattedListPrice: '\\$375,000',
        address: {
            full: '1839 Berkely Way',
            city: 'Folsom',
            state: 'CA'
        },
        listDate: '12/13/2020',
        formattedListDate: '12/13/2020'
    }
];

describe('Property tests:', () => {
    test('renders without crashing', () => {
        const property = TEST_PROPERTIES[0];

        // Get Component
        let component;
        act(() => {
            component = create(
                <Property id="123" property={property} />
            );
        });

        // Snapshot component
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('metadata visible', () => {
        const property = TEST_PROPERTIES[0];

        // render component and retrieve getByText
        // I chose to use react testing library here
        // to simplify ensuring that the text was appearing
        const { getByText } = render(
            <Property id="123" property={property} />
        );

        // Check that bedroom metadata exists in proper format
        const bedroomCheck = `${property.bedrooms}\\sBR`;
        expect(getByText(new RegExp(bedroomCheck, 'i'))).toBeInTheDocument();

        // Check that bathroom metadata exists in proper format
        const bathCheck = `${property.bathsTotal}\\sBath`;
        expect(getByText(new RegExp(bathCheck, 'i'))).toBeInTheDocument();

        // Check that area exists in proper format
        const sqFtCheck = `${property.area}\\sSq Ft`;
        expect(getByText(new RegExp(sqFtCheck, 'i'))).toBeInTheDocument();

        // Check that listPrice exists in proper format
        expect(getByText(new RegExp(property.formattedListPrice, "i"))).toBeInTheDocument();

        // Check that listDate exists in proper format
        const listDateCheck = `Listed:\\s${property.formattedListDate}`;
        expect(getByText(new RegExp(listDateCheck, 'i'))).toBeInTheDocument();

        // Check that address exists in proper format;
        const addressCheck = `${property.address.full},\\s${property.address.city},\\s${property.address.state}`;
        expect(getByText(new RegExp(addressCheck, 'i'))).toBeInTheDocument();
    });
});