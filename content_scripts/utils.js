window.utils = {
    formatToCurrency: function(currencyTarget) {
        const menuName = 'Number'
        this.activateMenu(`${menuName}►`);
        this.activateMenu("Custom currency");

        setTimeout(() => {
                const currencyOption = Array.from(document.querySelectorAll('[class="nfd-format-display"]')).filter(el => el.textContent === currencyTarget).map(el => el.parentElement)[0];
                KeyboardUtils.simulateClick(currencyOption);
                this.clickApplyButton()
                this.unselectRow();
            }, 500
        )


    }


}
