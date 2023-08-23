import React, { Component } from 'react'

import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

export default class Categorias extends Component {
    render() {
        return (
            <>
                <div class="p-4 sm:ml-64">
                    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                        <Tabs.Group
                            aria-label="Default tabs"
                            style="default"
                        >
                            <Tabs.Item
                                active
                                icon={HiUserCircle}
                                title="Profile"
                            >
                                <p>
                                    This is
                                    <span className="font-medium text-gray-800 dark:text-white">
                                        Profile tab's associated content
                                    </span>
                                    .
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                    control the content visibility and styling.
                                </p>
                            </Tabs.Item>
                            <Tabs.Item
                                icon={MdDashboard}
                                title="Dashboard"
                            >
                                <p>
                                    This is
                                    <span className="font-medium text-gray-800 dark:text-white">
                                        Dashboard tab's associated content
                                    </span>
                                    .
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                    control the content visibility and styling.
                                </p>
                            </Tabs.Item>
                        </Tabs.Group>
                    </div>
                </div>
            </>
        )
    }
}
