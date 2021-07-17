import { LightningElement,api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class AccordionFSC extends LightningElement {
    @api isExpanded;
    @api label;
    @api htmlText;
    activeSection;

    connectedCallback(){
        if (this.isExpanded) {
            this.activeSection = 'myAccordion';
        }
        else {
            this.activeSection = '';
        }
    }

    handleSectionToggle(event) {
        const openSections = event.detail.openSections;
        if (openSections.length !== 0) {
            this.isExpanded = true;
            this.activeSection = 'myAccordion';
            this.template.querySelector('.elementHoldingHTMLContent').innerHTML = this.htmlText;
        } else {
            this.isExpanded = false;
            this.activeSection = '';
        }
        const attributeChangeEvent = new FlowAttributeChangeEvent('isExpanded',this.isExpanded);
        this.dispatchEvent(attributeChangeEvent);
    }
}