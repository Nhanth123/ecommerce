using Core.Entities.OrderAggregate;

namespace Core.Specifications;

public class OrderByPaymentIdSpecification : BaseSpecification<Order>
{
    public  OrderByPaymentIdSpecification (string paymentId)
        : base( o => o.PaymentIntentId == paymentId)
    {
        
    }
}