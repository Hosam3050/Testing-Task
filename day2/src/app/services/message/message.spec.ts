import { MessageService } from "./message.service";


describe('Test MessageService',()=>{
    let service:MessageService;
    beforeEach(()=>{
      service=new MessageService();
    })

    it('Test messages array ,its empty at first',()=>{
        expect(service.messages.length).toEqual(0)
    })
    it('Test messages array length  should  increase after call add function',()=>{
        service.add('msg 1')
        service.add('msg 2')
        expect(service.messages.length).toEqual(2)
    })
    it('Test messages array length  should be zero after call clear function',()=>{
        service.add('msg 1')
        service.add('msg 2')
        service.add('msg 3')

        service.clear()
        expect(service.messages).toHaveSize(0)
    })
})