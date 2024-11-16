export default {
    name: "blog",
    type: "document",
    title: "Postagens Blog",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Título da Postagem',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
            }
          },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Imagem de Capa',
        },
        {
            name: 'smallDescription',
            type: 'string',
            title: 'Descrição Pequena',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Conteúdo da Postagem',
            of: [
                {
                    type: 'block',
                },
            ],
        }, 
    ],
}