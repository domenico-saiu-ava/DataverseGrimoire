---
logical: "msdyn_resourcerequirementdetail"
display: "Dettagli di requisito di risorsa"
entitySetName: "msdyn_resourcerequirementdetails"
primaryId: "msdyn_resourcerequirementdetailid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dettagli di requisito di risorsa

Dettagli dell'ora di requisito di risorsa

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_resourcerequirementdetail` |
| Display name | Dettagli di requisito di risorsa |
| Display (plural) | Dettagli di requisito di risorsa |
| Schema name | `msdyn_resourcerequirementdetail` |
| Entity set (Web API) | `msdyn_resourcerequirementdetails` |
| Primary id attribute | `msdyn_resourcerequirementdetailid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_resourcerequirementdetails?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_resourcerequirementdetails(<guid>)
POST /api/data/v9.2/msdyn_resourcerequirementdetails
PATCH /api/data/v9.2/msdyn_resourcerequirementdetails(<guid>)
DELETE /api/data/v9.2/msdyn_resourcerequirementdetails(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_duration`, `msdyn_from`, `msdyn_name`, `msdyn_resourcerequirementdetailid`, `msdyn_resourcerequirementid`, `msdyn_shiftactivitytypeid`, `msdyn_to`, `msdyn_tzafrom`, `msdyn_tzato`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_resourcerequirementdetail_shiftactivityty` | [msdyn_shiftactivitytype](msdyn_shiftactivitytype.md) | `msdyn_shiftactivitytypeid` | `msdyn_shiftactivitytypeid` |
| `msdyn_resourcerequirement_details` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirementid` | `msdyn_resourcerequirementid` |
| `lk_msdyn_resourcerequirementdetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_resourcerequirementdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_resourcerequirementdetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_resourcerequirementdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_resourcerequirementdetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_resourcerequirementdetail` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_resourcerequirementdetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_resourcerequirementdetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_resourcerequirementdetail_DuplicateMatchingRecord` | [msdyn_resourcerequirementdetail](msdyn_resourcerequirementdetail.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_resourcerequirementdetail` |
| `msdyn_resourcerequirementdetail_DuplicateBaseRecord` | [msdyn_resourcerequirementdetail](msdyn_resourcerequirementdetail.md) | `baserecordid` | `baserecordid_msdyn_resourcerequirementdetail` |
| `msdyn_resourcerequirementdetail_Annotations` | [msdyn_resourcerequirementdetail](msdyn_resourcerequirementdetail.md) | `objectid` | `objectid_msdyn_resourcerequirementdetail` |
| `msdyn_resourcerequirementdetail_SyncErrors` | [msdyn_resourcerequirementdetail](msdyn_resourcerequirementdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourcerequirementdetail` |
| `msdyn_resourcerequirementdetail_AsyncOperations` | [msdyn_resourcerequirementdetail](msdyn_resourcerequirementdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourcerequirementdetail` |
| `msdyn_resourcerequirementdetail_MailboxTrackingFolders` | [msdyn_resourcerequirementdetail](msdyn_resourcerequirementdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourcerequirementdetail` |
| `msdyn_resourcerequirementdetail_UserEntityInstanceDatas` | [msdyn_resourcerequirementdetail](msdyn_resourcerequirementdetail.md) | `objectid` | `objectid_msdyn_resourcerequirementdetail` |
| `msdyn_resourcerequirementdetail_ProcessSession` | [msdyn_resourcerequirementdetail](msdyn_resourcerequirementdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourcerequirementdetail` |
| `msdyn_resourcerequirementdetail_BulkDeleteFailures` | [msdyn_resourcerequirementdetail](msdyn_resourcerequirementdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourcerequirementdetail` |
| `msdyn_resourcerequirementdetail_PrincipalObjectAttributeAccesses` | [msdyn_resourcerequirementdetail](msdyn_resourcerequirementdetail.md) | `objectid` | `objectid_msdyn_resourcerequirementdetail` |


## Source

Generated from [msdyn_resourcerequirementdetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_resourcerequirementdetail')) on 2026-05-07.