import Swal, { SweetAlertOptions } from 'sweetalert2';
export function Confirmable(options?: SweetAlertOptions) {
    return (
        target: Object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any) {
            Swal.fire(
                {
                    title: options?.title || 'Are you sure to perform this action?',
                    icon: options?.icon || 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No'
                }
            ).then((value) => {
                if (value.isConfirmed) {
                    const result = originalMethod.apply(this, args);
                    return result;
                }
            });
            return descriptor;
        };
    };
}
