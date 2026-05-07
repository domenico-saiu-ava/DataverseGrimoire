---
logical: "actioncard"
display: "Action Card"
entitySetName: "actioncards"
primaryId: "actioncardid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
---

# Action Card

Action card entity to show action cards.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `actioncard` |
| Display name | Action Card |
| Display (plural) | Action Cards |
| Schema name | `ActionCard` |
| Entity set (Web API) | `actioncards` |
| Primary id attribute | `actioncardid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/actioncards?$select=title&$top=10
GET /api/data/v9.2/actioncards(<guid>)
POST /api/data/v9.2/actioncards
PATCH /api/data/v9.2/actioncards(<guid>)
DELETE /api/data/v9.2/actioncards(<guid>)
```

## Attributes

Writable: **26** · Read-only: **13**

### Writable

`ActionCardId`, `CardType`, `CardTypeId`, `Data`, `Description`, `ExpiryDate`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentRegardingObjectId`, `ParentRegardingObjectIdData`, `ParentRegardingObjectTypeCode`, `Priority`, `RecordId`, `RecordIdObjectTypeCode`, `RecordIdObjectTypeCode2`, `ReferenceTokens`, `RegardingObjectId`, `RegardingObjectTypeCode`, `Source`, `StartDate`, `State`, `Title`, `TransactionCurrencyId`, `Visibility`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (19)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_actioncard` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_actioncard` |
| `adx_inviteredemption_ActionCards` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_portalcomment_ActionCards` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `appointment_actioncard` | [appointment](appointment.md) | `regardingobjectid` | `regardingobjectid_appointment_actioncard` |
| `business_unit_actioncards` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `chat_ActionCards` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `contact_actioncard` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_actioncard` |
| `email_actioncard` | [email](email.md) | `regardingobjectid` | `regardingobjectid_email_actioncard` |
| `fax_actioncard` | [fax](fax.md) | `regardingobjectid` | `regardingobjectid_fax_actioncard` |
| `letter_actioncard` | [letter](letter.md) | `regardingobjectid` | `regardingobjectid_letter_actioncard` |
| `lk_actioncardbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_actioncardbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_actioncardbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_actioncardbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_actioncards` | [owner](owner.md) | `ownerid` | `ownerid` |
| `phonecall_actioncard` | [phonecall](phonecall.md) | `regardingobjectid` | `regardingobjectid_phonecall_actioncard` |
| `recurringappointmentmaster_actioncard` | [recurringappointmentmaster](recurringappointmentmaster.md) | `regardingobjectid` | `regardingobjectid_recurringappointmentmaster_actioncard` |
| `task_actioncard` | [task](task.md) | `regardingobjectid` | `regardingobjectid_task_actioncard` |
| `transactioncurrency_actioncard` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ActionCardUserState_ActionCard` | _n/a_ | `actioncardid` | _n/a_ |


## Source

Generated from [actioncard.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/actioncard.md) on 2026-05-06.