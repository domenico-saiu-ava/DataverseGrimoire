---
logical: "msdyn_planartifact"
display: "Artefatto piano"
entitySetName: "msdyn_planartifacts"
primaryId: "msdyn_planartifactid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Artefatto piano

Tabella in cui sono archiviati i record degli artefatti per un piano.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_planartifact` |
| Display name | Artefatto piano |
| Display (plural) | Artefatti piano |
| Schema name | `msdyn_PlanArtifact` |
| Entity set (Web API) | `msdyn_planartifacts` |
| Primary id attribute | `msdyn_planartifactid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_planartifacts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_planartifacts(<guid>)
POST /api/data/v9.2/msdyn_planartifacts
PATCH /api/data/v9.2/msdyn_planartifacts(<guid>)
DELETE /api/data/v9.2/msdyn_planartifacts(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_artifactmetadataschemaversion`, `msdyn_artifactstatus`, `msdyn_description`, `msdyn_name`, `msdyn_parentplanid`, `msdyn_planartifactid`, `msdyn_proposalschemaversion`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_artifactmetadata`, `msdyn_proposal`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_planartifact_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_planartifact_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_planartifact_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_planartifact_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_planartifact` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_planartifact` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_planartifact` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_planartifact` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_PlanArtifact_msdyn_ArtifactMetadata` | [fileattachment](fileattachment.md) | `msdyn_artifactmetadata` | `msdyn_artifactmetadata` |
| `FileAttachment_msdyn_PlanArtifact_msdyn_Proposal` | [fileattachment](fileattachment.md) | `msdyn_proposal` | `msdyn_proposal` |
| `msdyn_plan_msdyn_planartifact` | [msdyn_plan](msdyn_plan.md) | `msdyn_parentplanid` | `msdyn_ParentPlanId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `businessprocesslinkedartifact_planartifact_msdyn_planartifact` | [msdyn_planartifact](msdyn_planartifact.md) | `planartifact` | `planartifact` |
| `msdyn_planartifact_SyncErrors` | [msdyn_planartifact](msdyn_planartifact.md) | `regardingobjectid` | `regardingobjectid_msdyn_planartifact` |
| `msdyn_planartifact_AsyncOperations` | [msdyn_planartifact](msdyn_planartifact.md) | `regardingobjectid` | `regardingobjectid_msdyn_planartifact` |
| `msdyn_planartifact_MailboxTrackingFolders` | [msdyn_planartifact](msdyn_planartifact.md) | `regardingobjectid` | `regardingobjectid_msdyn_planartifact` |
| `msdyn_planartifact_UserEntityInstanceDatas` | [msdyn_planartifact](msdyn_planartifact.md) | `objectid` | `objectid_msdyn_planartifact` |
| `msdyn_planartifact_ProcessSession` | [msdyn_planartifact](msdyn_planartifact.md) | `regardingobjectid` | `regardingobjectid_msdyn_planartifact` |
| `msdyn_planartifact_BulkDeleteFailures` | [msdyn_planartifact](msdyn_planartifact.md) | `regardingobjectid` | `regardingobjectid_msdyn_planartifact` |
| `msdyn_planartifact_PrincipalObjectAttributeAccesses` | [msdyn_planartifact](msdyn_planartifact.md) | `objectid` | `objectid_msdyn_planartifact` |
| `msdyn_planartifact_FileAttachments` | [msdyn_planartifact](msdyn_planartifact.md) | `objectid` | `objectid_msdyn_planartifact` |


## Source

Generated from [msdyn_planartifact (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_planartifact')) on 2026-05-07.