---
logical: "msdyn_requirementresourcepreference"
display: "Preferenza risorsa requisito"
entitySetName: "msdyn_requirementresourcepreferences"
primaryId: "msdyn_requirementresourcepreferenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Preferenza risorsa requisito

Preferenza risorsa requisito

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_requirementresourcepreference` |
| Display name | Preferenza risorsa requisito |
| Display (plural) | Preferenze risorse requisito |
| Schema name | `msdyn_requirementresourcepreference` |
| Entity set (Web API) | `msdyn_requirementresourcepreferences` |
| Primary id attribute | `msdyn_requirementresourcepreferenceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_requirementresourcepreferences?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_requirementresourcepreferences(<guid>)
POST /api/data/v9.2/msdyn_requirementresourcepreferences
PATCH /api/data/v9.2/msdyn_requirementresourcepreferences(<guid>)
DELETE /api/data/v9.2/msdyn_requirementresourcepreferences(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bookableresource`, `msdyn_expirationdate`, `msdyn_name`, `msdyn_preferencetype`, `msdyn_requirementresourcepreferenceid`, `msdyn_resourcerequirement`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookableresource_msdyn_requirementresourcepreference_BookableResource` | [bookableresource](bookableresource.md) | `msdyn_bookableresource` | `msdyn_BookableResource` |
| `msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirement` | `msdyn_ResourceRequirement` |
| `lk_msdyn_requirementresourcepreference_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_requirementresourcepreference_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_requirementresourcepreference_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_requirementresourcepreference_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_requirementresourcepreference` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_requirementresourcepreference` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_requirementresourcepreference` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_requirementresourcepreference` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementresourcepreference_DuplicateMatchingRecord` | [msdyn_requirementresourcepreference](msdyn_requirementresourcepreference.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_requirementresourcepreference` |
| `msdyn_requirementresourcepreference_DuplicateBaseRecord` | [msdyn_requirementresourcepreference](msdyn_requirementresourcepreference.md) | `baserecordid` | `baserecordid_msdyn_requirementresourcepreference` |
| `msdyn_requirementresourcepreference_Annotations` | [msdyn_requirementresourcepreference](msdyn_requirementresourcepreference.md) | `objectid` | `objectid_msdyn_requirementresourcepreference` |
| `msdyn_requirementresourcepreference_SyncErrors` | [msdyn_requirementresourcepreference](msdyn_requirementresourcepreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementresourcepreference` |
| `msdyn_requirementresourcepreference_AsyncOperations` | [msdyn_requirementresourcepreference](msdyn_requirementresourcepreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementresourcepreference` |
| `msdyn_requirementresourcepreference_MailboxTrackingFolders` | [msdyn_requirementresourcepreference](msdyn_requirementresourcepreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementresourcepreference` |
| `msdyn_requirementresourcepreference_UserEntityInstanceDatas` | [msdyn_requirementresourcepreference](msdyn_requirementresourcepreference.md) | `objectid` | `objectid_msdyn_requirementresourcepreference` |
| `msdyn_requirementresourcepreference_ProcessSession` | [msdyn_requirementresourcepreference](msdyn_requirementresourcepreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementresourcepreference` |
| `msdyn_requirementresourcepreference_BulkDeleteFailures` | [msdyn_requirementresourcepreference](msdyn_requirementresourcepreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementresourcepreference` |
| `msdyn_requirementresourcepreference_PrincipalObjectAttributeAccesses` | [msdyn_requirementresourcepreference](msdyn_requirementresourcepreference.md) | `objectid` | `objectid_msdyn_requirementresourcepreference` |


## Source

Generated from [msdyn_requirementresourcepreference (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_requirementresourcepreference')) on 2026-05-07.