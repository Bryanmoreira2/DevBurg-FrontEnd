

import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Container, ErroMessage, From, Input, InputGroup, Label, LabelUpload, Select, SubmitButton,StyledWrapper } from "./styles"
import { ImageBroken } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { api } from '../../../services/api'
import { toast } from "react-toastify"


const schema = yup.object({
    name: yup.string().required("Digite o nome do produto"),
    price: yup.number().positive().required("Digite o preço do produto").typeError('Digite o preço do produto'),
    category: yup.object().required("Escolha uma categoria"),
    oferr: yup.bool(),
    file: yup.mixed().test('required',
        'Escolha um arquivo para continuar',
         (value) => {
        return value && value.length > 0;
    }).test('fileSize', 'O arquivo deve ter no máximo 10MB', (value) => {
        return value && value.length > 0 && value[0].size <= 10 * 1024 * 1024
    })
    .test('type', 'Carregue apenas imagem PNG ou JPEG', (value) => {
        return value && value.length > 0 &&
         (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
    })
})



export function NewProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')


            setCategories(data)

        }
        loadCategories()
    }, []);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit =  async (data) => {
        const productFormData =new FormData();

        productFormData.append('name', data.name);
        productFormData.append('price', data.price*100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);
        productFormData.append('offer', data.offer);

        await toast.promise( api.post ('/products',productFormData),{
            pending: 'Carregando...',
            success: 'Produto criado com sucesso',
            error: 'Falha ao adicionar o produto, tente novamente'
        })
    }
    return (
        <Container>
            <From onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} />
                    <ErroMessage>{errors?.name?.message}</ErroMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} />
                    <ErroMessage>{errors?.price?.message}
                    </ErroMessage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <ImageBroken />
                        <input
                            type="file"
                            {...register('file')}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value.target?.files[0]?.name)
                                register('file').onChange(value)
                            }}
                        />
                        {fileName || 'Upload do Arquivo'}
                        
                    </LabelUpload>
                    <ErroMessage>{errors?.file?.message}</ErroMessage>
                </InputGroup>
                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller
                    name="category"
                    control={control}
                    render={({field})=>(
                         <Select
                         {...field}
                        options={categories}
                        getOptionLabel={(category) => category.name}
                        getOptionValue={(category) => category.id}
                        placeholder="Categorias"
                        menuPortalTarget={document.body} 
                        />
                    )}/>
                     <ErroMessage>{errors?.category?.message}</ErroMessage>
                </InputGroup>
                <StyledWrapper>
                                    <div className="checkbox-wrapper-31">
                                       
                                        <input 
                                       type="checkbox"
                                        {...register('offer')}
                                         />
                                        <svg viewBox="0 0 35.6 35.6">
                                            <circle className="background" cx="17.8" cy="17.8" r="17.8" />
                                            <circle className="stroke" cx="17.8" cy="17.8" r="14.37" />
                                            <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87" />
                                        </svg>
                                        <Label>Produto em Oferta </Label>
                                    </div>
                                </StyledWrapper>

                <SubmitButton>Adicionar Produto </SubmitButton>

            </From>
        </Container>
    )
}