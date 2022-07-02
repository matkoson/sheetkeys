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


    }


}
