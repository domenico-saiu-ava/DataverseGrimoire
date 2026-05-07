---
logical: "marketingformdisplayattributes"
display: "Attributi visualizzazione modulo di marketing"
entitySetName: "marketingformdisplayattributesset"
primaryId: "marketingformdisplayattributesid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attributi visualizzazione modulo di marketing

Impostazione per consentire i moduli personalizzati per il modulo di marketing in-app

## Identity

| Property | Value |
| --- | --- |
| Logical name | `marketingformdisplayattributes` |
| Display name | Attributi visualizzazione modulo di marketing |
| Display (plural) | Set attributi visualizzazione modulo di marketing |
| Schema name | `marketingformdisplayattributes` |
| Entity set (Web API) | `marketingformdisplayattributesset` |
| Primary id attribute | `marketingformdisplayattributesid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/marketingformdisplayattributesset?$select=name&$top=10
GET /api/data/v9.2/marketingformdisplayattributesset(<guid>)
POST /api/data/v9.2/marketingformdisplayattributesset
PATCH /api/data/v9.2/marketingformdisplayattributesset(<guid>)
DELETE /api/data/v9.2/marketingformdisplayattributesset(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`displayattributelist`, `entitylogicalname`, `importsequencenumber`, `marketingformdisplayattributesid`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_marketingformdisplayattributes_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_marketingformdisplayattributes_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_marketingformdisplayattributes_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_marketingformdisplayattributes_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_marketingformdisplayattributes` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `marketingformdisplayattributes_SyncErrors` | [marketingformdisplayattributes](marketingformdisplayattributes.md) | `regardingobjectid` | `regardingobjectid_marketingformdisplayattributes` |
| `marketingformdisplayattributes_DuplicateMatchingRecord` | [marketingformdisplayattributes](marketingformdisplayattributes.md) | `duplicaterecordid` | `duplicaterecordid_marketingformdisplayattributes` |
| `marketingformdisplayattributes_DuplicateBaseRecord` | [marketingformdisplayattributes](marketingformdisplayattributes.md) | `baserecordid` | `baserecordid_marketingformdisplayattributes` |
| `marketingformdisplayattributes_AsyncOperations` | [marketingformdisplayattributes](marketingformdisplayattributes.md) | `regardingobjectid` | `regardingobjectid_marketingformdisplayattributes` |
| `marketingformdisplayattributes_MailboxTrackingFolders` | [marketingformdisplayattributes](marketingformdisplayattributes.md) | `regardingobjectid` | `regardingobjectid_marketingformdisplayattributes` |
| `marketingformdisplayattributes_UserEntityInstanceDatas` | [marketingformdisplayattributes](marketingformdisplayattributes.md) | `objectid` | `objectid_marketingformdisplayattributes` |
| `marketingformdisplayattributes_ProcessSession` | [marketingformdisplayattributes](marketingformdisplayattributes.md) | `regardingobjectid` | `regardingobjectid_marketingformdisplayattributes` |
| `marketingformdisplayattributes_BulkDeleteFailures` | [marketingformdisplayattributes](marketingformdisplayattributes.md) | `regardingobjectid` | `regardingobjectid_marketingformdisplayattributes` |
| `marketingformdisplayattributes_PrincipalObjectAttributeAccesses` | [marketingformdisplayattributes](marketingformdisplayattributes.md) | `objectid` | `objectid_marketingformdisplayattributes` |


## Source

Generated from [marketingformdisplayattributes (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='marketingformdisplayattributes')) on 2026-05-07.