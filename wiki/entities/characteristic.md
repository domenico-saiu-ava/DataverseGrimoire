---
logical: "characteristic"
display: "Characteristic"
entitySetName: "characteristics"
primaryId: "characteristicid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Characteristic

Skills, education and certifications of resources.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `characteristic` |
| Display name | Characteristic |
| Display (plural) | Characteristics |
| Schema name | `Characteristic` |
| Entity set (Web API) | `characteristics` |
| Primary id attribute | `characteristicid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/characteristics?$select=name&$top=10
GET /api/data/v9.2/characteristics(<guid>)
POST /api/data/v9.2/characteristics
PATCH /api/data/v9.2/characteristics(<guid>)
DELETE /api/data/v9.2/characteristics(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`CharacteristicId`, `CharacteristicType`, `Description`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_characteristic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_characteristic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_characteristic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_characteristic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_characteristic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_characteristic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_characteristic` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_characteristic` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_characteristic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `characteristic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `characteristic_bookableresourcecharacteristic_Characteristic` | _n/a_ | `characteristic` | _n/a_ |
| `characteristic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `characteristic_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `characteristic_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `characteristic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `characteristic_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `characteristic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Characteristic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic` | _n/a_ | `msdyn_characteristic` | _n/a_ |
| `msdyn_characteristic_msdyn_swarmskill_Skillid` | _n/a_ | `msdyn_skillid` | _n/a_ |
| `msdyn_characteristic_skillattachmenttarget` | _n/a_ | `msdyn_characteristicid` | _n/a_ |
| `msdyn_ocsitdskill_skillid_Characteristic` | _n/a_ | `msdyn_skillid` | _n/a_ |


## Source

Generated from [characteristic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/characteristic.md) on 2026-05-06.