"use client";

import { Field, FieldLabel } from "@/components/ui/field";

export default function FormLanding(){
    return(
        <>
        <form>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Field className="gap-1 mt-2">
                                        <FieldLabel className="text-black" htmlFor="form-field-name">
                                            Name*
                                        </FieldLabel>
                                        <input
                                            name="form-fields[name]"
                                            id="form-field-name"
                                            type="text"
                                            placeholder="Name"
                                            required
                                            className="text-black border-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                                        />
                                        </Field>
        
                                        <Field className="gap-1 mt-2">
                                        <FieldLabel className="text-black" htmlFor="form-field-apellidos">
                                            Lastname*
                                        </FieldLabel>
                                        <input
                                            name="form_fields[apellidos]"
                                            type="text"
                                            id="form-field-apellidos"
                                            placeholder="Lastname"
                                            required
                                            className="text-black border-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                                        />
                                        </Field>
                                    </div>
                                    
                                
        
                                    <div className="grid grid-cols-1 gap-x-4">
                                        <Field className="gap-1 mt-2">
                                        <FieldLabel className="text-black" htmlFor="form-field-celular">
                                            Phone*
                                        </FieldLabel>
                                        <div className="h-9 flex items-stretch w-full rounded-md border border-input bg-white overflow-hidden">
                                            <div className="flex items-center gap-2 px-3 border-r border-input bg-white">
                                            <img src="/icons/flag-UE.jpg" alt="Colombia" width={18} height={18} loading="lazy" />
                                            <span className="text-sm font-medium text-black">+1</span>
                                            </div>
                                        <input
                                            name="form_fields[celular]"
                                            id="form-field-celular"
                                            placeholder="5551234567"
                                            required
                                            type="tel"
                                            maxLength={10}
                                            inputMode="numeric"
                                            autoComplete="tel-national"
                                            pattern="^[0-9]{10}$"
                                            title="Escribe 10 dígitos (Ej: 3102345678)"
                                            className="text-black border-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-md px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                                            onInput={(e) => {
                                                const el = e.currentTarget;
                                                el.value = el.value.replace(/\D/g, "").slice(0, 10);
                                            }}
                                        />
                                        </div>
                                        
                                        </Field>
                                    </div>
        
                                    <div className="grid grid-cols-1 gap-x-4">
                                        <Field className="gap-1 mt-2">
                                        <FieldLabel className="text-black" htmlFor="email">
                                            Email*
                                        </FieldLabel>
                                        <input
                                            type="email"
                                            className="text-black border-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                                            name="email"
                                            id="email"
                                            placeholder="email@dominio.com"
                                            required
                                        />
                                        </Field>
                                    </div>
        
                                    <div className="grid grid-cols-1 gap-x-4">
                                        <Field className="gap-1 mt-2">
                                        <FieldLabel className="text-black" htmlFor="form-field-zip">
                                            Zipcode*
                                        </FieldLabel>
                                        <input
                                            name="form_fields[zip]"
                                            id="form-field-zip"
                                            placeholder="12345"
                                            required
                                            type="text"
                                            maxLength={5}
                                            inputMode="numeric"
                                            pattern="^[0-9]{5}$"
                                            className="text-black border-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-md px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                                            onInput={(e) => {
                                                const el = e.currentTarget;
                                                el.value = el.value.replace(/\D/g, "").slice(0, 5);
                                            }}
                                        />
                                        </Field>
                                    </div>
        
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <Field className="gap-1 mt-2 hidden">
                                        <FieldLabel className="text-black" htmlFor="form-field-programa">
                                            Program
                                        </FieldLabel>
                                        <input
                                            name="form_fields[programa]"
                                            type="hidden"
                                            id="form-field-programa"
                                            value="program"
                                        />
                                        </Field>
        
                                    </div>
        
                                    <div>
                                        <p className="text-center text-xs text-[#646464] py-2">
                                            Clicking the <strong>"Send Request"</strong> button below constitutes your 
                                            express written consent to be called and/or texted by CMVC 
                                            at the number(s) provided.
                                        </p>
                                    </div>
        
                                    <div className="mx-auto text-center">
                                            <button
                                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 has-[>svg]:px-3 min-h-[44px] px-4 py-3 text-lg my-1 bg-[#ffc316] hover:bg-[#ffcf45] text-black hover:text-black"
                                                type="submit"
                                                id="buttonbunji"
                                            >
                                                Send Request
                                            </button>
                                    </div>
                                </form>
        </>
    )
}