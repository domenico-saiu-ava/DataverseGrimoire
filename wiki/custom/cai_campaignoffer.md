---
logical: "cai_campaignoffer"
display: "Offerta campagna"
entitySetName: "cai_campaignoffers"
primaryId: "cai_campaignofferid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Offerta campagna

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_campaignoffer` |
| Display name | Offerta campagna |
| Display (plural) | Offerte campagna |
| Schema name | `cai_campaignoffer` |
| Entity set (Web API) | `cai_campaignoffers` |
| Primary id attribute | `cai_campaignofferid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_campaignoffers?$select=cai_name&$top=10
GET /api/data/v9.2/cai_campaignoffers(<guid>)
POST /api/data/v9.2/cai_campaignoffers
PATCH /api/data/v9.2/cai_campaignoffers(<guid>)
DELETE /api/data/v9.2/cai_campaignoffers(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`cai_activitytype`, `cai_adobecode`, `cai_adobeid`, `cai_argumentid`, `cai_campaignofferid`, `cai_channel`, `cai_code`, `cai_contentcode`, `cai_contenttype`, `cai_description`, `cai_duration`, `cai_enddate`, `cai_name`, `cai_productid`, `cai_startdate`, `cai_txt`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_campaignoffer_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_campaignoffer_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_campaignoffer_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_campaignoffer_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_campaignoffer` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_campaignoffer` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_campaignoffer` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_campaignoffer` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `cai_cai_argument_cai_campaignoffer_argumentid` | [cai_argument](cai_argument.md) | `cai_argumentid` | `cai_argumentid` |
| `cai_campaignoffer_productid_cai_product` | [cai_product](cai_product.md) | `cai_productid` | `cai_productid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_campaignoffer_SyncErrors` | [cai_campaignoffer](cai_campaignoffer.md) | `regardingobjectid` | `regardingobjectid_cai_campaignoffer` |
| `cai_campaignoffer_DuplicateMatchingRecord` | [cai_campaignoffer](cai_campaignoffer.md) | `duplicaterecordid` | `duplicaterecordid_cai_campaignoffer` |
| `cai_campaignoffer_DuplicateBaseRecord` | [cai_campaignoffer](cai_campaignoffer.md) | `baserecordid` | `baserecordid_cai_campaignoffer` |
| `cai_campaignoffer_AsyncOperations` | [cai_campaignoffer](cai_campaignoffer.md) | `regardingobjectid` | `regardingobjectid_cai_campaignoffer` |
| `cai_campaignoffer_MailboxTrackingFolders` | [cai_campaignoffer](cai_campaignoffer.md) | `regardingobjectid` | `regardingobjectid_cai_campaignoffer` |
| `cai_campaignoffer_UserEntityInstanceDatas` | [cai_campaignoffer](cai_campaignoffer.md) | `objectid` | `objectid_cai_campaignoffer` |
| `cai_campaignoffer_ProcessSession` | [cai_campaignoffer](cai_campaignoffer.md) | `regardingobjectid` | `regardingobjectid_cai_campaignoffer` |
| `cai_campaignoffer_BulkDeleteFailures` | [cai_campaignoffer](cai_campaignoffer.md) | `regardingobjectid` | `regardingobjectid_cai_campaignoffer` |
| `cai_campaignoffer_PrincipalObjectAttributeAccesses` | [cai_campaignoffer](cai_campaignoffer.md) | `objectid` | `objectid_cai_campaignoffer` |
| `ava_cai_product_anagrafeoffertacampagnaid_cai_campaignoffer` | [cai_campaignoffer](cai_campaignoffer.md) | `ava_anagrafeoffertacampagnaid` | `ava_anagrafeoffertacampagnaid` |
| `cai_lead_campaignofferid_cai_campaignoffer` | [cai_campaignoffer](cai_campaignoffer.md) | `cai_campaignofferid` | `cai_campaignofferid` |


## Source

Generated from [cai_campaignoffer (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_campaignoffer')) on 2026-05-07.