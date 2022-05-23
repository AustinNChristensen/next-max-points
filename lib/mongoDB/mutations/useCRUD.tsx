import useSWR from 'swr';
import { PartialDeep } from 'type-fest';

interface IUseCRUDOptions {
    shouldFetch?: boolean;
}

const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json());

export const useCRUD = <ModelType, PostType extends {} = never>(url: string, options?: IUseCRUDOptions) => {
    const { data: read, mutate } = useSWR<ModelType>(options?.shouldFetch === false ? null : url, fetcher);

    const create = async (data: PostType) => {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ ...data })
        });
        await mutate();

        return res.json();
    };

    const update = async (id: string, updateData: PartialDeep<PostType>) => {
        await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                id,
                update: updateData
            })
        });
        await mutate();
    };

    const remove = async (id: string) => {
        await fetch(url, {
            method: 'DELETE',
            body: JSON.stringify({ id })
        });
        await mutate();
    };

    return {
        create,
        read,
        update,
        remove,
        mutate
    };
};