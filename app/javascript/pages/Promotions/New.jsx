import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import axios from 'axios';

import { useForm, useFieldArray } from 'react-hook-form';

import AppLayoutDesktop from '../../layout/AppLayoutDesktop'

function handleGoBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '/promotions';
  }
}

export default function New({ paymentMethods }) {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      promotion: {
        name: '',
        pixKey: '',
        promotionType: '',
        paymentMethods: []
      }
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'promotion.paymentMethods'
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/promotions", data)
    }
    catch (error){
      if(error.reponse?.status === 422){
        const errorsApi = error.reponse.data.errors;
        console.log(errorsApi)
      }
    }
  };

  const [pixKeyRequired, setPixKeyRequired] = useState(false)

  const handlePixKeyRequired = (element, required) => {
    if(!required) return
    setPixKeyRequired(element.checked)
  }

  return (
    <main className="pt-24 px-4 max-w-7xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <button
            onClick={() => handleGoBack()}
            className="flex items-center gap-1 text-primary mb-2 active:scale-95 transition-transform">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-bold hover:underline">Voltar ao Painel</span>
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Criar Nova Promoção</h2>
          <p className="text-base text-gray-600">Configure os detalhes da promoção</p>
        </div>
        <div className="grid gap-4">
          <section className="bg-surface-container-lowest p-3 rounded-xl shadow-sm border border-outline-variant/20 ">
            <h3 className="font-headline-md text-headline-1.5 mb-1.5 flex items-center gap-0.5">
              <span className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-label-bold">1</span>
              Identificação
            </h3>
            <div className="space-y-1">
              <div className="flex flex-col gap-0.5">
                <label className="font-label-bold text-label-bold text-on-surface">Nome da Promoção</label>
                <input
                  className="h-touch-target-min bg-surface-container-low border-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-xl px-1 text-body-1.5 transition-all w-full"
                  placeholder="Pastelada"
                  autoComplete='off'
                  {...register('promotion.name', {
                    required: 'O nome da promoção é obrigatório',
                    minLength: { value: 3, message: 'Mínimo de 3 caracteres' }
                  })}
                  type="text" />
                  {errors.promotion?.name && <span className='text-error text-sm'>{errors.promotion.name.message}</span>}
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-label-bold text-label-bold text-on-surface">Tipo de Promoção</label>
                <select
                  className="h-touch-target-min bg-surface-container-low border-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-xl px-1 text-body-1.5 transition-all w-full"
                  {...register('promotion.promotionType', {
                    required: 'O tipo de promoção é obrigatório'
                  })}
                >
                  <option>Selecione o tipo da promoção</option>
                  <option value="1">Sob Demanda</option>
                  <option value="2">Produtos Prontos</option>
                </select>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-lowest p-1.5 rounded-xl shadow-1 border border-outline-variant/20">
            <h3 className="font-headline-1.5 text-headline-1.5 mb-1.5 flex items-center gap-0.5">
              <span className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-label-bold">2</span>
              Formas de Pagamento
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
              {paymentMethods.map((method, index) => (
                <label key={`method_${index}`} className="flex items-center gap-0.5 p-1.5 bg-surface-container-low rounded-2xl border-transparent focus-within:border-primary hover:bg-surface-container-high transition-colors cursor-pointer">
                  <input className="text-primary rounded focus:ring-primary w-5 h-5" 
                  type="checkbox" 
                  onClick={(e) => handlePixKeyRequired(e.target, method.pix_key_required)} 
                  value={method.id} 
                  {...register('promotion.paymentMethods')} 
                  />
                  <span className="font-label-bold text-on-surface">{method.name}</span>
                </label>
              ))}
            </div>
            {
                pixKeyRequired &&
              <div className="flex flex-col gap-0.5">
                  <label className="font-label-bold text-label-bold text-on-surface">Chave Pix</label>
                  <input
                    className="h-touch-target-min bg-surface-container-low border-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-xl px-1 text-body-1.5 transition-all w-full"
                    placeholder="Ex: 41151157000103"
                    autoComplete='off'
                    {...register('promotion.pixKey')}
                    type="text" />
                </div>
            }
          </section>

          <section className="bg-surface-container-lowest p-1.5 rounded-xl shadow-1 border border-outline-variant/20">
            <h3 className="font-headline-1.5 text-headline-1.5 mb-1.5 flex items-center gap-0.5">
              <span className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-label-bold">3</span>
              Configuração de Produtos
            </h3>
            <div className="space-y-1">
              <span>Teste</span>
            </div>
          </section>

          <button type='submit' className="w-full h-touch-target-min bg-primary text-on-primary p-1 font-headline-1.5 font-bold rounded-xl shadow-1.5 hover:brightness-95 active:scale-[0.98] transition-all flex justify-center items-center gap-0.5">
            <span className="material-symbols-outlined">save</span>
            Salvar Promoção
          </button>
        </div>
      </form>
    </main>
  )
}

New.layout = (page) => <AppLayoutDesktop children={page} />