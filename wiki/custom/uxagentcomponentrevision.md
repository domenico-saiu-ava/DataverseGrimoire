---
logical: "uxagentcomponentrevision"
display: "Revisione componente agente UX"
entitySetName: "uxagentcomponentrevisions"
primaryId: "uxagentcomponentrevisionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Revisione componente agente UX

## Identity

| Property | Value |
| --- | --- |
| Logical name | `uxagentcomponentrevision` |
| Display name | Revisione componente agente UX |
| Display (plural) | Revisioni componenti agente UX |
| Schema name | `uxagentcomponentrevision` |
| Entity set (Web API) | `uxagentcomponentrevisions` |
| Primary id attribute | `uxagentcomponentrevisionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/uxagentcomponentrevisions?$select=name&$top=10
GET /api/data/v9.2/uxagentcomponentrevisions(<guid>)
POST /api/data/v9.2/uxagentcomponentrevisions
PATCH /api/data/v9.2/uxagentcomponentrevisions(<guid>)
DELETE /api/data/v9.2/uxagentcomponentrevisions(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`agentmessage`, `agentmessagetime`, `componentid`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `revisioncompiledcodestring`, `revisiongeneratedcode`, `revisionmanifest`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `usermessage`, `usermessagetime`, `utcconversiontimezonecode`, `uxagentcomponentrevisionid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `revisioncompiledcode`, `userattachment`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_uxagentcomponentrevision_RevisionCompiledCode` | [fileattachment](fileattachment.md) | `revisioncompiledcode` | `revisioncompiledcode` |
| `FileAttachment_uxagentcomponentrevision_UserAttachment` | [fileattachment](fileattachment.md) | `userattachment` | `userattachment` |
| `uxagentcomponent_uxagentcomponentrevision_ComponentId` | [uxagentcomponent](uxagentcomponent.md) | `componentid` | `ComponentId` |
| `lk_uxagentcomponentrevision_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_uxagentcomponentrevision_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_uxagentcomponentrevision_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_uxagentcomponentrevision_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_uxagentcomponentrevision` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_uxagentcomponentrevision` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_uxagentcomponentrevision` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_uxagentcomponentrevision` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `uxagentcomponentrevision_FileAttachments` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `objectid` | `objectid_uxagentcomponentrevision` |
| `uxagentcomponentrevision_uxagentcomponent_ActiveRevisionId` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `activerevisionid` | `ActiveRevisionId` |
| `uxagentcomponentrevision_uxagentcomponent_PublishedRevisionId` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `publishedrevisionid` | `PublishedRevisionId` |
| `uxagentcomponentrevision_SyncErrors` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `regardingobjectid` | `regardingobjectid_uxagentcomponentrevision` |
| `uxagentcomponentrevision_AsyncOperations` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `regardingobjectid` | `regardingobjectid_uxagentcomponentrevision` |
| `uxagentcomponentrevision_MailboxTrackingFolders` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `regardingobjectid` | `regardingobjectid_uxagentcomponentrevision` |
| `uxagentcomponentrevision_UserEntityInstanceDatas` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `objectid` | `objectid_uxagentcomponentrevision` |
| `uxagentcomponentrevision_ProcessSession` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `regardingobjectid` | `regardingobjectid_uxagentcomponentrevision` |
| `uxagentcomponentrevision_BulkDeleteFailures` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `regardingobjectid` | `regardingobjectid_uxagentcomponentrevision` |
| `uxagentcomponentrevision_PrincipalObjectAttributeAccesses` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `objectid` | `objectid_uxagentcomponentrevision` |


## Source

Generated from [uxagentcomponentrevision (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='uxagentcomponentrevision')) on 2026-05-07.