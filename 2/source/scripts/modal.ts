export class Modal
{
    private readonly id: string;
    public static modals: Array<any> = new Array;

    constructor (id: string = '')
    {
        const element = Modal.modals.find(element => element.id === id);
        if (element)
            Modal.removeById(id);
        Modal.modals.push(this);
        this.id = id;
    }
    
    private close(event: Event): void
    {
        const element = event.target as HTMLElement;
        if (element.classList.contains('close-modal'))
            this.remove();
    }

    public open(template: string): void
    {
        const body = document.body,
              wrapper = document.createElement('div');
              wrapper.addEventListener('click', this.close);
              wrapper.classList.add('modal-element');
              wrapper.id = this.id;
              wrapper.innerHTML = template;
              wrapper.setAttribute('modal-id', this.id);
        body.appendChild(wrapper);
    }

    public remove(): void
    {
        const element = document.getElementById(this.id);
        if (element)
        {
            element.removeEventListener('click', this.close);
            element.parentNode.removeChild(element);
        }
    }

    public static removeById(id: string = ''): void
    {
        const element = Modal.modals.find(element => element.id === id);
        if (element)
        {
            element.remove();
            Modal.modals = Modal.modals.filter(element => element.id !== id);
        }
        else
        {
            if (Array.isArray(Modal.modals))
            {
                const element = Modal.modals.pop();
                if (element)
                    element.remove();
            }
        }
    }

    public static removeAll(): void
    {
        if (Array.isArray(Modal.modals))
            Modal.modals.forEach(element => Modal.removeById(element.id));
    }
}