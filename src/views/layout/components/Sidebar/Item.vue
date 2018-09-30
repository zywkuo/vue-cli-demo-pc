<script>
    export default {
        name: "Item",
        functional: true,
        props: {
            icon: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        },
        render(createVNodesment, context) {
            const { icon, title } = context.props
            const VNodes = []

            if(icon){
                VNodes.push(<icon-svg icon-class={icon} />)
            }

            if(title){
                VNodes.push(<span slot="title">{title}</span>)
            }
            return VNodes
        }
    }
</script>
