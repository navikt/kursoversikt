import classnames from 'classnames';

const bemHelper = (cls: string) => ({
    block: cls,
    element: (e?: string, m?: string) => `${cls}__${e}${m ? ` ${cls}__${e}--${m}` : ''}`,
    modifier: (m?: string) => `${cls}--${m}`,
    classNames: (...classes: any[]) => classnames(classes),
});

export default bemHelper;
