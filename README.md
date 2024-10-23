# User Scripts
[![License](https://img.shields.io/github/license/Drakmyth/remove-highlight-text-fragment)](https://github.com/Drakmyth/remove-highlight-text-fragment/blob/master/LICENSE.md)

Contained in this repository are a variety of Tampermonkey userscripts. Enjoy!

## Remove Highlight Text Fragment [![Other](https://img.shields.io/badge/dynamic/json?style=social&label=Greasy%20Fork&query=total_installs&url=https%3A%2F%2Fgreasyfork.org%2F%2Fen%2Fscripts%2F448410-remove-highlight-text-fragment.json&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=)](https://greasyfork.org/en/scripts/448410-remove-highlight-text-fragment)

Automatically removes highlight fragments from Google/Bing search results.

Starting in Chromium 80, Google started tacking text fragments on the end of search result urls. When you visit one of the results, your browser will auto-scroll to the location of the text in the fragment and highlight it. This behavior is incredibly obnoxious, but there is no way to disable it.

There are some browser extensions that are able to counteract this behavior, but they do so via a whitelist of domains which doesn't cover all scenarios.

This script will inspect the page url when you visit it and will automatically remove the highlight fragment if it exists and refresh the page to prevent the highlight and scroll before it ever happens.

## SteamDB Hide Foreign Currencies [![Other](https://img.shields.io/badge/dynamic/json?style=social&label=Greasy%20Fork&query=total_installs&url=https%3A%2F%2Fgreasyfork.org%2F%2Fen%2Fscripts%2F444412-steamdb-hide-foreign-currencies.json&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=)](https://greasyfork.org/en/scripts/444412-steamdb-hide-foreign-currencies)

Hides foreign currency information on SteamDB.

It's against Steam's terms of service to utilize different currencies in order to take advantage of inflation between countries, so having all the foreign currencies there just makes the page noisy and obscures the one currency you care about.

A toggle button has been added next to the currency selector in case you do want to see them all.

## Unreal Engine Marketplace Additional Asset Filters [![Other](https://img.shields.io/badge/dynamic/json?style=social&label=Greasy%20Fork&query=total_installs&url=https%3A%2F%2Fgreasyfork.org%2F%2Fen%2Fscripts%2F420295-unreal-engine-marketplace-additional-asset-filters.json&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=)](https://greasyfork.org/en/scripts/420295-unreal-engine-marketplace-additional-asset-filters)

Adds additional asset filters to the Unreal Engine Marketplace.

### Included Filters

- Hide/Show Owned Assets
- Hide/Show External Assets

## Issues
If you come across something that seems like a bug, please report it here. Make sure to follow these guidelines to ensure your report isn't closed as "Invalid":

* Make sure you are using the latest Release version of the script. Old versions of scripts are unsupported. Features and fixes will not be backported to old versions.
* Search to see if someone else has already reported the bug. Duplicate reports just slow down getting things fixed.
* Include steps to reproduce the issue in your report. Screenshots or videos may also prove helpful.

## Feature Requests
Have an idea for other features that would fit well in these scripts? Awesome! File an issue and detail your idea. Keep it succinct and on-point, and only one feature per request, or it will be closed as "Invalid". Then we'll discuss your idea some and decide whether to implement it or not.

## Contributions
These scripts are open source! That means if you'd like to try your hand at fixing a bug or implementing a feature, please do so! Head over to the Issues page and look for any open issues tagged with the "Accepted" label. Create a branch, work on it, then submit a pull request. We'll work together to iron out any concerns with your code, and then we'll merge it in and your code will become a part of the script's legacy!

## License
All userscripts are licensed under the MIT License (MIT). See [LICENSE](./LICENSE.md) for details.
