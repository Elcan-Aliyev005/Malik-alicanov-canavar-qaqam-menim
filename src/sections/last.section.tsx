import {Button} from "@mantine/core";


function LastSection() {
    return (
        <div>
            <div className={'h-[128px text-center'}>
                <img className={'inline-block lg:hidden'} src={'/img/logo_bg-mobile.svg'} alt={"logo-bg"}/>
                <img className={'hidden lg:inline-block'} src={'/img/logo_bg.svg'} alt={"logo-bg"}/>
            </div>
            <div className={'bg-[#108910] lg:pl-[63.5px] lg:flex lg:items-center  relative rounded-[19px] text-[#fff] mt-[-43px] lg:translate-y-[-33%] p-4 sm :p-6 lg:p-4 lg:min-h-[500px]'}>
                  <div className={'lg:w-5/9 2xl:w-6/9'}>
                      <h4 className={'leading-[16px] text-xs  lg:text-[16px] lg:leading-6 mb-2'}>Bizimlə əlaqə</h4>
                      <h3 className={'text-[32px] lg:text-[44px]  lg:leading-[52px]  lg:font-bold  mb-2 font-semibold leading-[40px]'}>Siz də bizə
                          qoşulmaq istəyirsiniz?</h3>
                      <p className={'text-[14px] lg:pr-[80px] mb-8 text-[#ffffffad] leading-6'}> Cras tellus erat, gravida non ultricies sit amet, consequat vel enim. Nunc ac diam nibh.
                          Donec commodo lobortis sollicitudin. Donec ultricies, orci sed maximus elementum,  </p>

                      <div className={'hidden lg:flex lg:items-center pt-[14px] gap-[8px]'}>
                          <img  src={'/img/store.svg'} alt={"store"}/>
                          <img  src={'/img/apple.svg'} alt={"apple"}/>

                      </div>
                      <form className={' block lg:hidden text-right'}>
                          <div className={'bg-[#DBEDDB] text-left mb-3 px-[24px] py-[10px] rounded-full'}>
                              <input className={' placeholder:text-[#108910]'} type={'email'} name={'email'} placeholder={'Emailinizi daxil edin'}/>
                          </div>
                          <Button className={'!rounded-full min-w-[146px] mb-[14px] !text-[16px] !leading-6 min-h-[44px]'} color={'#000'}>Abunə olun</Button>
                      </form>
                  </div>
                <div className={'absolute bottom-0 right-0 w-[540px] xl:w-[650px]'}>
                    <img className={'hidden lg:inline-block'} src={'/img/girl-phone2.png'} alt={"logo-bg"}/>
                </div>
            </div>
        </div>
    )
}

export default LastSection
