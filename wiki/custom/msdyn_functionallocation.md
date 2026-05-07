---
logical: "msdyn_functionallocation"
display: "Unità funzionale"
entitySetName: "msdyn_functionallocations"
primaryId: "msdyn_functionallocationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Unità funzionale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_functionallocation` |
| Display name | Unità funzionale |
| Display (plural) | Unità funzionali |
| Schema name | `msdyn_FunctionalLocation` |
| Entity set (Web API) | `msdyn_functionallocations` |
| Primary id attribute | `msdyn_functionallocationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_functionallocations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_functionallocations(<guid>)
POST /api/data/v9.2/msdyn_functionallocations
PATCH /api/data/v9.2/msdyn_functionallocations(<guid>)
DELETE /api/data/v9.2/msdyn_functionallocations(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_costcenter`, `msdyn_emailaddress`, `msdyn_functionallocationid`, `msdyn_functionallocationtype`, `msdyn_locationopendate`, `msdyn_name`, `msdyn_parentfunctionallocation`, `msdyn_primarytimezone`, `msdyn_sequence`, `msdyn_shortname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_functionallocation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_functionallocation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_functionallocation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_functionallocation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_functionallocation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_functionallocation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_functionallocation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_functionallocation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_FunctionalLocation_FunctionalLocationTyp` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `msdyn_functionallocationtype` | `msdyn_FunctionalLocationType` |
| `msdyn_FunctionalLocation_ParentFunctional` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_parentfunctionallocation` | `msdyn_ParentFunctionalLocation` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_functionallocation_SyncErrors` | [msdyn_functionallocation](msdyn_functionallocation.md) | `regardingobjectid` | `regardingobjectid_msdyn_functionallocation` |
| `msdyn_functionallocation_AsyncOperations` | [msdyn_functionallocation](msdyn_functionallocation.md) | `regardingobjectid` | `regardingobjectid_msdyn_functionallocation` |
| `msdyn_functionallocation_MailboxTrackingFolders` | [msdyn_functionallocation](msdyn_functionallocation.md) | `regardingobjectid` | `regardingobjectid_msdyn_functionallocation` |
| `msdyn_functionallocation_UserEntityInstanceDatas` | [msdyn_functionallocation](msdyn_functionallocation.md) | `objectid` | `objectid_msdyn_functionallocation` |
| `msdyn_functionallocation_ProcessSession` | [msdyn_functionallocation](msdyn_functionallocation.md) | `regardingobjectid` | `regardingobjectid_msdyn_functionallocation` |
| `msdyn_functionallocation_BulkDeleteFailures` | [msdyn_functionallocation](msdyn_functionallocation.md) | `regardingobjectid` | `regardingobjectid_msdyn_functionallocation` |
| `msdyn_functionallocation_PrincipalObjectAttributeAccesses` | [msdyn_functionallocation](msdyn_functionallocation.md) | `objectid` | `objectid_msdyn_functionallocation` |
| `msdyn_functionallocation_Annotations` | [msdyn_functionallocation](msdyn_functionallocation.md) | `objectid` | `objectid_msdyn_functionallocation` |
| `msdyn_customerasset_FunctionalLocation_ms` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_FunctionalLocation_ParentFunctional` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_parentfunctionallocation` | `msdyn_ParentFunctionalLocation` |
| `msdyn_msdyn_functionallocation_msdyn_locationtemplateassociation_FunctionalLocation` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_msdyn_functionallocation_msdyn_propertylocationassociation_FunctionalLocation` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_msdyn_functionallocation_msdyn_propertylog_FunctionalLocation` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_functionallocation_account` | [account](account.md) | _n/a_ | `msdyn_msdyn_functionallocation_account` |
| `msdyn_msdyn_warranty_msdyn_functionallocation` | [msdyn_warranty](msdyn_warranty.md) | _n/a_ | `msdyn_msdyn_warranty_msdyn_functionallocation` |

## Source

Generated from [msdyn_functionallocation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_functionallocation')) on 2026-05-07.