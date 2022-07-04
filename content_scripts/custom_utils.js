window.CustomUtils = {
    makeFormatToCurrency: that => currencyTarget => {
        const menuName = 'Number'
        that.activateMenu(`${menuName}►`);
        that.activateMenu("Custom currency");

        setTimeout(() => {
                const currencyOption = Array.from(document.querySelectorAll('[class="nfd-format-display"]')).filter(el => el.textContent === currencyTarget).map(el => el.parentElement)[0];
                KeyboardUtils.simulateClick(currencyOption);
                that.clickApplyButton()
                that.unselectRow();
            }, 500
        )


    },
    makeAlign: that => alignTarget => {
        that.activateMenu(that.menuItems.alignment);
        // "Left l"/"Center c"/"Right r"
        const optionEle = document.querySelector(`[aria-label="${alignTarget}"]`)
        KeyboardUtils.simulateClick(optionEle)
        that.unselectRow();
    },
    makeDel: that => delOptionTarget => {
        that.activateMenu(that.menuItems.delete);
        const optionEle = document.querySelector(`[aria-label="${delOptionTarget}"]`)
        KeyboardUtils.simulateClick(optionEle)
        that.unselectRow();
    },
    // css regex guide: https://developpaper.com/using-regular-expressions-in-css-selectors/
    makeDelRegex: that => delOptionTarget => {
        that.activateMenu(that.menuItems.delete);
        const optionEle = document.querySelector(delOptionTarget)
        KeyboardUtils.simulateClick(optionEle)
        that.unselectRow();
    }
    ,
    pressMainMenuItem: menuItemName => {
        const allMenuItems = Array.from(document.querySelectorAll('[role="menuitem"][class="menu-button goog-control goog-inline-block"]'))
        try {
            const menuItem = allMenuItems.filter(el => el.textContent.toLowerCase().includes(menuItemName.toLowerCase()))[0];
            KeyboardUtils.simulateClick(menuItem)

        } catch (e) {
            console.error(e)
        }
    },
    pressDomElement: selector => {
        const ele = document.querySelector(selector)
        setTimeout(() => KeyboardUtils.simulateClick(ele)
            , 100)
    }
}
